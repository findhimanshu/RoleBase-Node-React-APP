-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: one
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `permission`
--

DROP TABLE IF EXISTS `permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `description` mediumtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission`
--

LOCK TABLES `permission` WRITE;
/*!40000 ALTER TABLE `permission` DISABLE KEYS */;
INSERT INTO `permission` VALUES (1,'READ',NULL),(2,'CREATE',NULL),(3,'UPDATE',NULL),(4,'DELETE',NULL);
/*!40000 ALTER TABLE `permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `desciption` mediumtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'ADMIN',NULL),(2,'SELLER',NULL),(3,'SUPPORTER',NULL),(4,'CUSTOMER',NULL);
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rolepermission`
--

DROP TABLE IF EXISTS `rolepermission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rolepermission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `roleId` int DEFAULT NULL,
  `permissionId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rolepermission`
--

LOCK TABLES `rolepermission` WRITE;
/*!40000 ALTER TABLE `rolepermission` DISABLE KEYS */;
INSERT INTO `rolepermission` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,2,1),(6,2,2),(7,2,3),(9,3,1),(10,3,4),(11,4,1);
/*!40000 ALTER TABLE `rolepermission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `roleId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'himanshu','1234',1),(4,'himanshu2','81dc9bdb52d04dc20036dbd8313ed055',2),(5,'himanshu23','81dc9bdb52d04dc20036dbd8313ed055',1),(6,'himanshu233','81dc9bdb52d04dc20036dbd8313ed055',0),(7,'himanshu2233','81dc9bdb52d04dc20036dbd8313ed055',0),(8,'himanshu23233','81dc9bdb52d04dc20036dbd8313ed055',1),(9,'himanshu232','81dc9bdb52d04dc20036dbd8313ed055',1),(10,'himanshu32','81dc9bdb52d04dc20036dbd8313ed055',1),(11,'himansu32','81dc9bdb52d04dc20036dbd8313ed055',1),(14,'himansus32','81dc9bdb52d04dc20036dbd8313ed055',1),(15,'himanshu8','81dc9bdb52d04dc20036dbd8313ed055',1),(17,'himanshu82','81dc9bdb52d04dc20036dbd8313ed055',3),(18,'himanshu823','81dc9bdb52d04dc20036dbd8313ed055',3),(19,'himanshu823qw','81dc9bdb52d04dc20036dbd8313ed055',3),(20,'himanshu823q3w','9ff7c3af72792e3e82f5b84da31d16ca',3),(21,'himanshu823q23w','9ff7c3af72792e3e82f5b84da31d16ca',2),(22,'pal','31ad2f10870bb5e4c517357bf9f95e58',3),(23,'undefined','31ad2f10870bb5e4c517357bf9f95e58',3),(25,'pal1','31ad2f10870bb5e4c517357bf9f95e58',3),(26,'pal12','1d6b13b9c92cbeea036cc6c5a7016607',1),(27,'pal1254','c8769988e8c49991c481cc951e4e79f8',2),(28,'ashish','a15f2c0ef7b4bd3c06bfc0ea172a6e78',1),(29,'ashish1','a15f2c0ef7b4bd3c06bfc0ea172a6e78',2),(30,'ashish2','a15f2c0ef7b4bd3c06bfc0ea172a6e78',3),(31,'ashish4','a15f2c0ef7b4bd3c06bfc0ea172a6e78',4),(32,'ashish2341','310f406abc14c667f30b9d40b2fb68a1',1),(33,'pal1234','31ad2f10870bb5e4c517357bf9f95e58',1),(34,'qwe','31ad2f10870bb5e4c517357bf9f95e58',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-27  1:56:47
