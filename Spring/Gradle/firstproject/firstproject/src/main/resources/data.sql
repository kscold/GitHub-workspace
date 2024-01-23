-- @GeneratedValue(strategy = GenerationType.IDENTITY)로 데이터베이스 기반으로 위임하고 나서 id key와 value를 삭제한다.
-- INSERT INTO article(id, title, content) VALUES (1,'가가가가','1111');
-- INSERT INTO article(id, title, content) VALUES (2,'나나나나','2222');
-- INSERT INTo article(id, title, content) VALUES (3,'다다다다','3333');

INSERT INTO article(title, content) VALUES ('가가가가', '1111');
INSERT INTO article(title, content) VALUES ('나나나나', '2222');
INSERT INTo article(title, content) VALUES ('다다다다', '3333');