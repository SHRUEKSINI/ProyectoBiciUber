drop database if exists BicUber;

create database BicUber;

use BicUber;

-- Creación de la tabla Productos
CREATE TABLE Productos (
    Producto_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL
);

-- Inserción de productos en la tabla Productos
INSERT INTO Productos (nombre, descripcion, precio, stock)
VALUES 
('Bomba de Aire de Alta Gama', 'Bomba de aire portátil con diseño elegante y tecnología avanzada', 500.00, 10),
('Kit de parches', 'Kit de parche, especialmente diseñado para bicicletas', 200.00, 30),
('Tubo de solución vulcanizante', 'Tubo de vulcanización, pegamento exclusivo para bicicletas', 150.00, 20),
('Palancas desmontables', 'Palancas desmontables de alta calidad con diseño de lujo', 80.00, 30),
('Corta_Cadenas', 'Corta cadenas de alta calidad', 200.00, 10);

-- Consulta para ver todos los productos
SELECT Producto_id, nombre, descripcion, precio, stock
FROM Productos;

-- Creación de la tabla Factura
CREATE TABLE Factura (
    factura_id INT AUTO_INCREMENT PRIMARY KEY,  -- ID único de la factura
    nombre VARCHAR(100) NOT NULL,               -- Nombre del producto o servicio
    descripcion TEXT,                           -- Descripción detallada del producto o servicio
    precio DECIMAL(10,2) NOT NULL,              -- Precio del producto o servicio
    numero_de_factura INT NOT NULL UNIQUE,      -- Número único de la factura
    fecha_expedicion DATE NOT NULL,             -- Fecha de la expedición de la factura
    cantidad INT NOT NULL,                      -- Cantidad de productos o servicios
    metodo_de_pago VARCHAR(50) NOT NULL         -- Forma de pago (Efectivo, Tarjeta, Transferencia, etc.)
);

-- Inserción de facturas (productos facturados)
INSERT INTO Factura (nombre, descripcion, precio, cantidad, metodo_de_pago, numero_de_factura, fecha_expedicion)
VALUES 
('Bomba de Aire de Alta Gama', 'Bomba de aire portátil con diseño avanzado y tecnología para bicicletas', 500.00, 10, 'Efectivo', 123456, '2025-04-01'),
('Kit de parches', 'Kit de parches especialmente diseñado para bicicletas de montaña', 200.00, 30, 'Tarjeta', 123457, '2025-04-01'),
('Tubo de solución vulcanizante', 'Pegamento exclusivo para reparación de llantas de bicicletas', 150.00, 20, 'Transferencia', 123458, '2025-04-01'),
('Palancas desmontables', 'Palancas desmontables de alta calidad para bicicletas deportivas', 80.00, 30, 'Efectivo', 123459, '2025-04-01'),
('Corta_Cadenas', 'Herramienta profesional para cortar cadenas de bicicleta', 200.00, 10, 'Tarjeta', 123460, '2025-04-01'),
('Mantenimiento de bicicletas', 'Servicio de mantenimiento completo para bicicletas', 80.00, 30, 'Transferencia', 123461, '2025-04-01'),
('Reemplazo de llantas', 'Servicio de cambio de llantas y reparación de pinchazos', 80.00, 30, 'Efectivo', 123462, '2025-04-01');

-- Consulta para ver todas las facturas
SELECT factura_id, nombre, descripcion, precio, cantidad, numero_de_factura, fecha_expedicion, metodo_de_pago
FROM Factura;


CREATE TABLE Servicio (
    servicio_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL
);

INSERT INTO Servicio (nombre, descripcion, precio)
VALUES 
('Despinchar', 'En caso de que se realice un cambio', 20.000),
('Refaccion', 'Solicitud de un repuesto', 200.000),
('Remolcada', 'Se movilizará el vehículo', 100.000),
('Limpieza', 'Según la parte', 80.000),
('Mantenimiento', 'Mantenimiento de alguna parte', 200.000),
('Limpieza', 'Limpieza según la parte', 80.000);

SELECT servicio_id, nombre, descripcion, precio 
FROM Servicio;

CREATE TABLE Cliente (
    cliente_id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    cedula VARCHAR(20) NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    edad INT NOT NULL,
    direccion TEXT
);

INSERT INTO Cliente (nombre, correo, cedula, telefono, edad, direccion)
VALUES 
('Juan Pérez', 'juanperez@gmail.com', '1234567890', '987654321', 30, 'Calle Ficticia 123, Ciudad Ejemplo'),
('María López', 'marialopez@hotmail.com', '0987654321', '123456789', 25, 'Avenida Real 456, Ciudad Modelo'),
('Carlos Gómez', 'carlosgomez@gmail.com', '1122334455', '556677889', 40, 'Plaza Central 789, Ciudad Grande');

SELECT cliente_id, nombre, correo, cedula, telefono, edad, direccion
FROM Cliente;