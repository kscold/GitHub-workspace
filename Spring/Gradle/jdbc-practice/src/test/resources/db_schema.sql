DROP TABLE IF EXISTS USERS; -- 안약 USERS이 존재하면 테이블 삭제

CREATE TABLE USERS
(
    userId   varchar(12) NOT NULL,
    password varchar(12) NOT NULL,
    name     varchar(20) NOT NULL,
    email    varchar(50),

    PRIMARY KEY (userId) -- userId를 기본 키로 설정
);