-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 25, 2022 at 04:05 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employee_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `mesage`
--

CREATE TABLE `mesage` (
  `id` int(11) NOT NULL,
  `sender_id` int(11) NOT NULL,
  `message` varchar(200) NOT NULL,
  `reciever_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user_information`
--

CREATE TABLE `user_information` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `age` varchar(20) NOT NULL,
  `address` varchar(100) NOT NULL,
  `mobile_number` varchar(50) NOT NULL,
  `email_address` varchar(50) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `photo_url` varchar(200) NOT NULL,
  `active` varchar(50) NOT NULL,
  `position` varchar(100) NOT NULL,
  `department` varchar(50) NOT NULL,
  `account_status` varchar(20) NOT NULL,
  `created` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_information`
--

INSERT INTO `user_information` (`id`, `name`, `lastname`, `age`, `address`, `mobile_number`, `email_address`, `username`, `password`, `photo_url`, `active`, `position`, `department`, `account_status`, `created`) VALUES
(10, 'lance jared', 'cabiscuelas', '26', 'bilucao malvar batangas', '09846572904', 'jojo@gmail.com', 'lance21', 'lance21', 'https://media-exp1.licdn.com/dms/image/C4E03AQEgr1XdaqrOpA/profile-displayphoto-shrink_200_200/0/1558697244765?e=1651104000&v=beta&t=L7lrXjCEuEMc0a5JZf2Tb-p59yzNC-PmL3Df8EoKn4Q', 'true', 'software developer', 'Software development team', 'admin', '2022-03-07 22:35:38.367'),
(11, 'lance jared', 'cabiscuelas', '26', 'bilucao malvar batangas', '09846572904', 'jojo@gmail.com', 'lance21', 'lancejared21', 'https://media-exp1.licdn.com/dms/image/C4E03AQEgr1XdaqrOpA/profile-displayphoto-shrink_200_200/0/1558697244765?e=1651104000&v=beta&t=L7lrXjCEuEMc0a5JZf2Tb-p59yzNC-PmL3Df8EoKn4Q', 'true', 'software developer', 'Software development team', 'admin', '2022-03-09 19:38:28.333'),
(13, 'tesst angular', 'test', '', 'test', 'test', 'lance@gmail.com', 'test', '123', '', '1', 'test', 'test', '', '2022-04-02 15:23:30.383'),
(17, 'jojo', 'joojoo', '21', '', '123', 'jojoo@gmail.com', 'joo2', 'jojo', '', '0', 'test', 'test', '0', '2022-04-09 23:43:06.519');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mesage`
--
ALTER TABLE `mesage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_information`
--
ALTER TABLE `user_information`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mesage`
--
ALTER TABLE `mesage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_information`
--
ALTER TABLE `user_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
