<?php
use App\Models\Db;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Selective\BasePath\BasePathMiddleware;
use Slim\Factory\AppFactory;

require_once __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();

$app->addRoutingMiddleware();
$app->add(new BasePathMiddleware($app));
$app->addErrorMiddleware(true, true, true);


// START API

// HOME
$app->get('/', function (Request $request, Response $response) {
   $response->getBody()->write('Hello World PHP SLIM!');
   return $response;
});


$app->get('/api/client', function (Request $request, Response $response) {
  $response->getBody()->write('Je suis un client');
  return $response;
});


$app->get('/customers/all', function (Request $request, Response $response) {
    $sql = "SELECT * FROM customer order by customer_id DESC";
   
    try {
      $db = new Db();
      $conn = $db->connect();
      $stmt = $conn->query($sql);
      $customers = $stmt->fetchAll(PDO::FETCH_OBJ);
      $db = null;
     
      $response->getBody()->write(json_encode($customers));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(200);
    } catch (PDOException $e) {
      $error = array(
        "message" => $e->getMessage()
      );
   
      $response->getBody()->write(json_encode($error));
      return $response
        ->withHeader('content-type', 'application/json')
        ->withStatus(500);
    }
   });
   


// Search for
$app->post('/search', function (Request $request, Response $response) {
  
  $data = $request->getBody()->getContents();
  
  $client = json_decode($data, true);

  $nom = $client['nom'];


  $sq = "SELECT * FROM customer WHERE first_name LIKE '%:nom%' AND last_name = '";


  $sql = "INSERT INTO customer(store_id,first_name, last_name, email, address_id,activebool, active, create_date, last_update) VALUES (:store_id, :first_name, :last_name, :email, :address_id,:activebool, :active,  NOW(), NOW())";
 
  try {
    $db = new Db();
    $conn = $db->connect();
    $q = $conn->prepare($sql);
    $q->bindParam(':nom',$nom);
    $q->bindParam(':first_name',$first_name);
    $q->bindParam(':last_name',$last_name);
    $q->bindParam(':email',$email);
    $q->bindParam(':address_id',$address_id);
    $q->bindParam(':activebool',$activebool);
    $q->bindParam(':active',$active);

    $stmt = $q->execute();
    
    $res = [
      'message' => "Enregistrement avec succes",
      "status" => 200
    ];
    $db = null;
   
    $response->getBody()->write(json_encode($res));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(200);

  } catch (PDOException $e) {
    $error = array(
      "message" => $e->getMessage()
    );
 
    $response->getBody()->write(json_encode($error));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(500);
  }
 });




// POST INSERT INTO

$app->post('/search/add', function (Request $request, Response $response) {
  
  $data = $request->getBody()->getContents();
  
  $client = json_decode($data, true);

  $store_id = $client['store_id'];
  $first_name = $client['first_name'];
  $last_name = $client['last_name'];
  $email = $client['email'];
  $address_id = $client['address_id'];
  $activebool = $client['activebool'];
  $active = $client['active'];

  $sql = "INSERT INTO customer(store_id,first_name, last_name, email, address_id,activebool, active, create_date, last_update) VALUES (:store_id, :first_name, :last_name, :email, :address_id,:activebool, :active,  NOW(), NOW())";
 
  try {
    $db = new Db();
    $conn = $db->connect();
    $q = $conn->prepare($sql);
    $q->bindParam(':store_id',$store_id);
    $q->bindParam(':first_name',$first_name);
    $q->bindParam(':last_name',$last_name);
    $q->bindParam(':email',$email);
    $q->bindParam(':address_id',$address_id);
    $q->bindParam(':activebool',$activebool);
    $q->bindParam(':active',$active);

    $stmt = $q->execute();
    
    $res = [
      'message' => "Enregistrement avec succes",
      "status" => 200
    ];
    $db = null;
   
    $response->getBody()->write(json_encode($res));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(200);

  } catch (PDOException $e) {
    $error = array(
      "message" => $e->getMessage()
    );
 
    $response->getBody()->write(json_encode($error));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(500);
  }
 });

 
 // UPDATE CLIENT
 $app->put('/customers/edit/{id_client}', function (Request $request, Response $response) {
  
  $idclient = $request->getAttribute('id_client');
  $data = $request->getBody()->getContents();

  $client = json_decode($data, true);

  $store_id = $client['store_id'];
  $first_name = $client['first_name'];
  $last_name = $client['last_name'];
  $email = $client['email'];

  $sql = "UPDATE customer 
  SET 
  store_id = :store_id, 
  first_name = :first_name, 
  last_name = :last_name, 
  email = :email
  WHERE customer_id = :customer_id";
 
  try {
    $db = new Db();
    $conn = $db->connect();
    $q = $conn->prepare($sql);
    $q->bindParam(':customer_id',$idclient);
    $q->bindParam(':store_id',$store_id);
    $q->bindParam(':first_name',$first_name);
    $q->bindParam(':last_name',$last_name);
    $q->bindParam(':email',$email);
    
    $stmt = $q->execute();
    
    $res = [
      'message' => "MAJ avec succes",
      "status" => 200
    ];
    $db = null;
   
    $response->getBody()->write(json_encode($res));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(200);

  } catch (PDOException $e) {
    $error = array(
      "message" => $e->getMessage()
    );
 
    $response->getBody()->write(json_encode($error));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(500);
  }
 });

// DELETE /users

$app->delete('/customers/delete/{id_client}', function (Request $request, Response $response, array $args) {
  $id = $args['id_client'];
  $idclient = $request->getAttribute('id_client');

  $sql = "DELETE FROM customer WHERE customer_id = ". $id;
 
  try {
    $db = new Db();
    $conn = $db->connect();
    $q = $conn->prepare($sql);
    $stmt = $q->execute();
    
    $res = [
      'message' => "Supp avec succes",
      "status" => 200
    ];
    $db = null;
   
    $response->getBody()->write(json_encode($res));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(200);

  } catch (PDOException $e) {
    $error = array(
      "message" => $e->getMessage()
    );
 
    $response->getBody()->write(json_encode($error));
    return $response
      ->withHeader('content-type', 'application/json')
      ->withStatus(500);
  }
 });








$app->run();
