ALTER DATABASE FortniteDB CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER DATABASE FortniteDB CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER DATABASE FortniteDB CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER DATABASE FortniteDB CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER DATABASE FortniteDB CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
ALTER DATABASE FortniteDB CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

DROP TABLE FortniteDB.t_player;
CREATE TABLE FortniteDB.t_player (
`player_id` BIGINT  NOT NULL PRIMARY KEY AUTO_INCREMENT comment'ID',
`twitter_id` BIGINT  NOT NULL comment'TwitterのID',
`password` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL comment'パスワード',
`player_name` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL comment'名前',
`screen_name` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL comment'スクリーン名称',
`description` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci   comment'説明',
`mail_address` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci   comment'メールアドレス',
`image_path` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci   comment'画像パス') DEFAULT CHARACTER SET utf8mb4 comment '' ;



DROP TABLE FortniteDB.t_team;
CREATE TABLE FortniteDB.t_team (
`team_id` BIGINT   comment'ID',
`player_id` BIGINT   comment'プレイヤーID') DEFAULT CHARACTER SET utf8mb4 comment '' ;


ALTER TABLE t_team ADD PRIMARY KEY(team_id,player_id);

DROP TABLE FortniteDB.m_team;
CREATE TABLE FortniteDB.m_team (
`team_id` BIGINT  NOT NULL PRIMARY KEY AUTO_INCREMENT comment'ID',
`team_name` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci   comment'チーム名',
`description` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci   comment'説明') DEFAULT CHARACTER SET utf8mb4 comment '' ;



DROP TABLE FortniteDB.m_tournament;
CREATE TABLE FortniteDB.m_tournament (
`tournament_id` BIGINT  NOT NULL PRIMARY KEY AUTO_INCREMENT comment'ID',
`datetime` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL comment'開催日付',
`title` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci   comment'タイトル',
`content` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci   comment'内容',
`image_path` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci   comment'画像パス') DEFAULT CHARACTER SET utf8mb4 comment '' ;



DROP TABLE FortniteDB.t_tournament;
CREATE TABLE FortniteDB.t_tournament (
`tournament_id` BIGINT   comment'ID',
`team_id` BIGINT   comment'チームID') DEFAULT CHARACTER SET utf8mb4 comment '' ;


ALTER TABLE t_tournament ADD PRIMARY KEY(tournament_id,team_id);

DROP TABLE FortniteDB.m_tiba_gundan;
CREATE TABLE FortniteDB.m_tiba_gundan (
`tiba_player_id` BIGINT  NOT NULL PRIMARY KEY AUTO_INCREMENT comment'ID',
`player_name` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL comment'プレイヤ名称',
`sub_title` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci   comment'サブタイトル',
`description` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci   comment'説明',
`image_path` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci   comment'画像パス') DEFAULT CHARACTER SET utf8mb4 comment '' ;



