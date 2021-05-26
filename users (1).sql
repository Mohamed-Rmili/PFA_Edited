-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 26, 2021 at 09:38 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pfa`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `CIN` int(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `permis` varchar(100) DEFAULT NULL,
  `prenom` varchar(100) DEFAULT NULL,
  `image` varchar(100) DEFAULT 'https://student1.geekslab.tn/uploads/logo.jpg',
  `modeAuto` tinyint(1) NOT NULL DEFAULT 0,
  `sex` varchar(100) DEFAULT NULL,
  `dateNais` varchar(100) DEFAULT NULL,
  `role` varchar(20) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `CIN`, `name`, `address`, `email`, `username`, `password`, `permis`, `prenom`, `image`, `modeAuto`, `sex`, `dateNais`, `role`, `email_verified_at`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 11067773, 'kbaili', 'sfax', 'wkbaili@gmail.com ', 'driver ', 'e10adc3949ba59abbe56e057f20f883e', 'Category B', 'wael', 'https://student1.geekslab.tn/uploads/11067773.jpg', 0, 'Men', '1995-07-14', 'driver', NULL, NULL, NULL, NULL),
(2, 6975680, 'amara', 'sfax', 'israaamaraa@gmail.com ', 'israa', '5b203658f1b0da1596db00ba59ee753f', 'Category B', 'israa', 'https://student1.geekslab.tn/uploads/6975680.jpg', 0, 'Women', '2020-12-09', 'driver', NULL, NULL, NULL, NULL),
(3, 6023226, 'ouni', 'soukra', 'tarek.ouni@gmail.com', 'ouni', '25f9e794323b453885f5181f1b624d0b', ' categorie A', 'tarek', 'https://student1.geekslab.tn/uploads/06023226.jpg', 0, NULL, NULL, 'driver', NULL, NULL, NULL, NULL),
(4, 7070707, 'NULL', 'NULL', 'NULL', 'NULL', '25f9e794323b453885f5181f1b624d0b', 'NULL', 'NULL', 'https://student1.geekslab.tn/uploads/logo.jpg', 0, NULL, NULL, 'driver', NULL, NULL, NULL, NULL),
(5, 1010101, 'me', 'soukra', 'tarek.ouni@gmail.com', 'ouni', '25f9e794323b453885f5181f1b624d0b', ' categorie A', 'normal', 'https://student1.geekslab.tn/uploads/logo.jpg', 0, NULL, NULL, 'driver', NULL, NULL, NULL, NULL),
(6, 11096813, 'ben', 'sfax', 'yesmine.benmessaoud@etudiant-enit.utm.tn', 'yesmine', 'e807f1fcf82d132f9bb018ca6738a19f', 'categorie B', 'messaoud', 'https://student1.geekslab.tn/uploads/11096813.jpg', 0, NULL, NULL, 'driver', NULL, NULL, NULL, NULL),
(7, 5344439, 'NULL', 'NULL', 'NULL', 'NULL', 'fdff5f604e1f25c3c9ffbe66db526f14', 'NULL', 'NULL', 'https://student1.geekslab.tn/uploads/logo.jpg', 0, NULL, NULL, 'driver', NULL, NULL, NULL, NULL),
(8, 8171214, 'Frikha', 'ENIS', 'tarek.frikha@enis.tn', 'Titoenis', 'e1118eec252d34ac84e46a7adbf5da5c', ' categorie A', 'Tarek', 'https://student1.geekslab.tn/uploads/logo.jpg', 0, NULL, NULL, 'driver', NULL, NULL, NULL, NULL),
(9, 5390099, 'NULL', 'NULL', 'NULL', 'NULL', '60f1f55e0dd471ccbd9b7f0adfae5d9e', 'NULL', 'NULL', 'https://student1.geekslab.tn/uploads/logo.jpg', 0, NULL, NULL, 'driver', NULL, NULL, NULL, NULL),
(10, 1, 'ouni', 'ons', 'tarek.ouni@gmail.com', 'timide', '202cb962ac59075b964b07152d234b70', ' categorie A', 'timide', 'https://student1.geekslab.tn/uploads/00000001.jpg', 0, NULL, NULL, 'driver', NULL, NULL, NULL, NULL),
(11, 2, 'ouni', 'ons', 'tarek.ouni@gmail.com', 'normal', '202cb962ac59075b964b07152d234b70', ' categorie A', 'normal', 'https://student1.geekslab.tn/uploads/logo.jpg', 0, NULL, NULL, 'driver', NULL, NULL, NULL, NULL),
(12, 3, 'ouni', 'ons', 'tarek.ouni@gmail.com', 'agressif', '202cb962ac59075b964b07152d234b70', ' categorie A', 'agressif', 'https://student1.geekslab.tn/uploads/logo.jpg', 0, NULL, NULL, 'driver', NULL, NULL, NULL, NULL),
(13, 4, 'ouni', 'ons', 'tarek.ouni@gmail.com', 'dangereux', '202cb962ac59075b964b07152d234b70', ' categorie A', 'dangereux', 'https://student1.geekslab.tn/uploads/4.jpg', 0, NULL, NULL, 'driver', NULL, NULL, NULL, NULL),
(14, 10000001, 'Yesmine', 'Ons', 'Jasmin.ben.m@gmail.com', 'Timide', '202cb962ac59075b964b07152d234b70', 'categorie B', 'Timide', 'https://student1.geekslab.tn/uploads/logo.jpg', 0, NULL, NULL, 'driver', NULL, NULL, NULL, NULL),
(15, 10000002, 'Yesmine ', 'Ons', 'Jasmin.ben.m@gmail.com ', 'Normal', '202cb962ac59075b964b07152d234b70', 'categorie B', 'Normal', 'https://student1.geekslab.tn/uploads/logo.jpg', 0, NULL, NULL, 'driver', NULL, NULL, NULL, NULL),
(16, 10, 'frikha ', 'soukra', 'Tarek.frikha@enis.tn', 'frikha', '202cb962ac59075b964b07152d234b70', 'categorie B', 'tumide', 'https://student1.geekslab.tn/uploads/logo.jpg', 0, NULL, NULL, 'driver', NULL, NULL, NULL, NULL),
(17, 20, 'frikha', 'soukra', 'tarek.frikha@enis.tn', 'frikha', '202cb962ac59075b964b07152d234b70', 'categorie B', 'standard', 'https://student1.geekslab.tn/uploads/logo.jpg', 0, NULL, NULL, 'driver', NULL, NULL, NULL, NULL),
(18, 1234567, 'gassara', 'soukra', 'Faiez.gassara@gmail.com ', 'fayez', '81dc9bdb52d04dc20036dbd8313ed055', 'categorie B', 'fayez', 'https://student1.geekslab.tn/uploads/logo.jpg', 1, NULL, NULL, 'driver', NULL, NULL, NULL, NULL),
(19, 11067774, 'last', 'sfax ', 'wkbaili@gmail.com ', 'user', '202cb962ac59075b964b07152d234b70', 'Category B', 'firsy', 'https://student1.geekslab.tn/uploads/logo.jpg', 0, NULL, NULL, 'driver', NULL, NULL, NULL, NULL),
(20, 11067775, 'last', 'sfax', 'wkbaili@gmail.com ', 'user', '202cb962ac59075b964b07152d234b70', 'Category B', 'first', 'https://student1.geekslab.tn/uploads/logo.jpg', 0, NULL, NULL, 'driver', NULL, NULL, NULL, NULL),
(21, 11111111, 'NULL', 'NULL', 'NULL', 'NULL', 'fcea920f7412b5da7be0cf42b8c93759', 'NULL', 'NULL', 'https://student1.geekslab.tn/uploads/logo.jpg', 0, NULL, NULL, 'driver', NULL, NULL, NULL, NULL),
(22, 12985411, 'last', 'sfax', 'wkbaili@gmail.com ', 'user', '202cb962ac59075b964b07152d234b70', 'Category A', 'first', 'https://student1.geekslab.tn/uploads/logo.jpg', 0, 'Men', '2020-12-09', 'driver', NULL, NULL, NULL, NULL),
(23, 55445544, 'last', 'sfax ', 'wkbaili@gmail.com ', 'user', '5b203658f1b0da1596db00ba59ee753f', 'Category B', 'first', 'https://student1.geekslab.tn/uploads/logo.jpg', 0, 'Women', '2020-12-09', 'driver', NULL, NULL, NULL, NULL),
(24, 54986709, 'NULL', 'NULL', 'NULL', 'NULL', '5b203658f1b0da1596db00ba59ee753f', 'NULL', 'NULL', 'https://student1.geekslab.tn/uploads/logo.jpg', 0, 'NULL', 'NULL', 'driver', NULL, NULL, NULL, NULL),
(25, 13262314, 'Rmili', 'sfax', 'rmilimohamed98@gmail.com', 'medrmili', '934871384f192382a8ac84380228c80d', 'Category A', 'Mohamed', 'https://student1.geekslab.tn/uploads/logo.jpg', 0, 'Men', '1998-12-03', 'admin', NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
