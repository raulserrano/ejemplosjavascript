<?php
header("Content-Type: application/json");
require 'config.php'; // Archivo con conexión a la base de datos

// Autenticación con Token
tokenAuth();

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        if (isset($_GET['codigo'])) {
            $codigo = $_GET['codigo'];
            $stmt = $pdo->prepare("SELECT * FROM articulos WHERE codigo = ?");
            $stmt->execute([$codigo]);
            echo json_encode($stmt->fetch(PDO::FETCH_ASSOC));
        } else {
            $stmt = $pdo->query("SELECT * FROM articulos");
            echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        }
        break;
    
        case 'POST':
            // Se esperan los datos desde $_POST (en caso de multipart/form-data)
            $codigo      = $_POST['codigo'];
            $nombre      = $_POST['nombre'];
            $descripcion = $_POST['descripcion'];
            $precio      = $_POST['precio'];
        
            // Procesar la subida del archivo de imagen
            $imagen = '';
            if(isset($_FILES['imagen']) && $_FILES['imagen']['error'] == 0) {
                $uploads_dir = 'uploads';
                if(!is_dir($uploads_dir)){
                    mkdir($uploads_dir, 0777, true);
                }
                $tmp_name = $_FILES['imagen']['tmp_name'];
                $originalName = basename($_FILES['imagen']['name']);
                $newName = time() . '_' . $originalName;
                if(move_uploaded_file($tmp_name, "$uploads_dir/$newName")){
                    $imagen = "$uploads_dir/$newName";
                } else {
                    echo json_encode(["message" => "Error al subir la imagen"]);
                    exit;
                }
            }
        
            try {
                $stmt = $pdo->prepare("INSERT INTO articulos (codigo, nombre, descripcion, imagen, precio) VALUES (?, ?, ?, ?, ?)");
                $stmt->execute([$codigo, $nombre, $descripcion, $imagen, $precio]);
                echo json_encode(["message" => "Artículo creado"]);
            } catch(PDOException $e) {
                // Código SQLSTATE 23000 se produce al violar una restricción de clave única
                if ($e->getCode() == 23000) {
                    echo json_encode(["message" => "Error: El código '$codigo' ya existe."]);
                } else {
                    echo json_encode(["message" => "Error: " . $e->getMessage()]);
                }
            }
            break;
    
    case 'PUT':
        // Para actualizar, se utilizará un método simulado: envío por POST con _method=PUT.
        if(isset($_POST['_method']) && $_POST['_method'] == 'PUT'){
            $codigo      = $_POST['codigo'];
            $nombre      = $_POST['nombre'];
            $descripcion = $_POST['descripcion'];
            $precio      = $_POST['precio'];
            
            // Procesar la imagen si se sube una nueva; si no, se conserva la imagen anterior.
            $imagen = null;
            if(isset($_FILES['imagen']) && $_FILES['imagen']['error'] == 0) {
                $imagenes_dir = 'imagenes';
                if(!is_dir($imagenes_dir)){
                    mkdir($imagenes_dir, 0777, true);
                }
                $tmp_name = $_FILES['imagen']['tmp_name'];
                $originalName = basename($_FILES['imagen']['name']);
                $newName = time() . '_' . $originalName;
                if(move_uploaded_file($tmp_name, "$imagenes_dir/$newName")){
                    $imagen = "$imagenes_dir/$newName";
                } else {
                    echo json_encode(["message" => "Error al subir la imagen"]);
                    exit;
                }
            }
            
            if($imagen !== null){
                $stmt = $pdo->prepare("UPDATE articulos SET nombre=?, descripcion=?, imagen=?, precio=? WHERE codigo=?");
                $stmt->execute([$nombre, $descripcion, $imagen, $precio, $codigo]);
            } else {
                $stmt = $pdo->prepare("UPDATE articulos SET nombre=?, descripcion=?, precio=? WHERE codigo=?");
                $stmt->execute([$nombre, $descripcion, $precio, $codigo]);
            }
            echo json_encode(["message" => "Artículo actualizado"]);
        } else {
            echo json_encode(["message" => "Método PUT no soportado"]);
        }
        break;
    
    case 'DELETE':
        // Para DELETE se mantiene el uso de JSON en el cuerpo de la solicitud
        $input = json_decode(file_get_contents("php://input"), true);
        $codigo = $input['codigo'];
        $stmt = $pdo->prepare("DELETE FROM articulos WHERE codigo=?");
        $stmt->execute([$codigo]);
        echo json_encode(["message" => "Artículo eliminado"]);
        break;
    
    default:
        echo json_encode(["message" => "Método no permitido"]);
        break;
}

function tokenAuth() {
    $token = null;

    // Primero se busca en el encabezado HTTP_AUTHORIZATION
    if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
        $token = $_SERVER['HTTP_AUTHORIZATION'];
    } 
    // Si no está en el encabezado, se busca en el parámetro GET
    elseif (isset($_GET['token'])) {
        $token = $_GET['token'];
    }

    // Compara el token (en este ejemplo se espera que tenga el prefijo 'Bearer ')
    if ($token !== 'TOKEN_DWEC') {
        http_response_code(401);
        echo json_encode(["message" => "Acceso no autorizado"]);
        exit;
    }
}
?>
