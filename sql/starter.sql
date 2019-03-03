-- Access Level
-- Basic distinction between normal and administrator users

CREATE TABLE `access_level` (
  `id` int(1) NOT NULL,
  `sortOrder` int(1) NOT NULL,
  `label` varchar(32) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `access_level`
  ADD PRIMARY KEY (`id`);

INSERT INTO `access_level` (`id`, `sortOrder`, `label`, `description`) VALUES
(1, 1, 'Administrator', 'Advanced user with full privileges.'),
(2, 2, 'User', 'Standard user with basic privileges.');

-- User
-- One "test" user

CREATE TABLE `user` (
  `id` int(3) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(128) NOT NULL,
  `accessLevelId` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

INSERT INTO `user` (`id`, `username`, `email`, `accessLevelId`) VALUES
(1, 'test', 'test@example.com', 2);

-- User Password
-- Separates basic user data from the secure password.
-- Sample password provided here is "test" encoded with md5

CREATE TABLE `user_password` (
  `userId` int(11) NOT NULL,
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `user_password`
  ADD PRIMARY KEY (`userId`);

INSERT INTO `user_password` (`userId`, `password`) VALUES
(1, '098f6bcd4621d373cade4e832627b4f6');

-- View to join User and User Password tables. 

CREATE OR REPLACE VIEW `user_TO_password` AS
  SELECT `user`.*, `user_password`.password
  FROM `user`
  JOIN `user_password` ON `user`.`id` = `user_password`.`userId`;
