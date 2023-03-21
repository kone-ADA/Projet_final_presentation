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
/**
 * CORS
 */
/* Handle CORS */

// Specify domains from which requests are allowed
header('Access-Control-Allow-Origin: *');

// Specify which request methods are allowed
header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');

// Additional headers which may be sent along with the CORS request
header('Access-Control-Allow-Headers: X-Requested-With,Authorization,Content-Type');

// Set the age to 1 day to improve speed/caching.
header('Access-Control-Max-Age: 86400');

// Exit early so the page isn't fully loaded for options requests
if (strtolower($_SERVER['REQUEST_METHOD']) == 'options') {
    exit();
}
/**
 * FIN CORS
 */

// START API

// // HOME
$app->get('/', function (Request $request, Response $response) {
    $sql = "SELECT * FROM pharmacies_medicaments";

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


// Search for title
$app->get('/search/{nom_commercial}', function (Request $request, Response $response) {
    $nom = $request->getAttribute('nom_commercial');

    $sql = "SELECT  a.nom_commercial,b.nom_pharmacie,b.longitude,b.latitude,b.commune,b.garde
             FROM pharmacies_medicaments a JOIN pharmacies b ON a.pharmacie_id = b.pharmacie_id
             WHERE a.nom_commercial LIKE '%$nom%'" ;

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
$app->get('/details/{nom_commercial}', function (Request $request, Response $response) {
    $nom = $request->getAttribute('nom_commercial');

    $sql = "SELECT  a.nom_commercial,b.nom_pharmacie,b.longitude,b.latitude,b.commune,b.garde
             FROM pharmacies_medicaments a JOIN pharmacies b ON a.pharmacie_id = b.pharmacie_id
             WHERE a.nom_commercial LIKE '%$nom%'" ;

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
$app->get('/map/{nom_commercial}', function (Request $request, Response $response) {
    $nom = $request->getAttribute('nom_commercial');

    $sql = "SELECT  a.nom_commercial,b.nom_pharmacie,b.longitude,b.latitude
             FROM pharmacies_medicaments a JOIN pharmacies b ON a.pharmacie_id = b.pharmacie_id
             WHERE a.nom_commercial LIKE '%$nom%'" ;

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


// POST INSERT INTO tutorials

$app->post("/add", function (Request $request, Response $response) {
    $data = $request->getBody()->getContents();

    $tutorial = json_decode($data, true);

    $title = $tutorial['title'];
    $description = $tutorial['description'];
    $published = $tutorial['published'];


    $sql = "INSERT INTO tutorials(title, description,published) VALUES (:title, :description,:published)";

    try {
        $db = new Db();
        $conn = $db->connect();
        $q = $conn->prepare($sql);
        $q->bindParam(':title', $title);
        $q->bindParam(':description', $description);
        $q->bindParam(':published', $published);

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


$app->get('/detail/{pharmacie_id}', function (Request $request, Response $response) {
    $pharmacie_id = $request->getAttribute('pharmacie_id');

    $sql = "SELECT * FROM pharmacies_medicaments a 
            JOIN  pharmacies b 
            ON a.pharmacie_id = b.pharmacie_id
            WHERE a.pharmacie_id = $pharmacie_id";

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

$app->run();