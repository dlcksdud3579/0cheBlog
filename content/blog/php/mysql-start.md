---
title: mysql 시작 하기 
date: "2019-12-03"
description: mysql 실행하기

---
개발 환경 : 구름 ide 
### 설치
 - 구름 ide 의경우 컨테이너 생성시 mysql 설치를 선택 하여 설치 가능 
 `sudo apt-get install -y mysql-server` 명령어로 설치 할수 있다 
### 접속 
`mysql -u root -p`로 mysql 실행이 가능 하나 root 비밀 번호를 설정해야 합니다.
  -초기 비밀번호 설정 방법: [제타위키 링크 ]([https://zetawiki.com/wiki/MySQL_root_%ED%8C%A8%EC%8A%A4%EC%9B%8C%EB%93%9C_%EB%B6%84%EC%8B%A4](https://zetawiki.com/wiki/MySQL_root_%ED%8C%A8%EC%8A%A4%EC%9B%8C%EB%93%9C_%EB%B6%84%EC%8B%A4))
### 기본 명령어 
 - 데이터베이스  생성: `CREATE DATABASE DBname`
 - 데이터베이스 사용: `USE DBname`
 - 테이블 생성 `CREATE TABLE tableName ()`
 -  insert, drop, update 등 여러 명령어사 있음 
 -  자세한 명령어 [w3schools ](https://www.w3schools.com/sql/default.asp)
 
### phpMyAdmin 
 -좀더 쉽게 관리하기 위해서 phpMyadmin을 설치 합시다. 
 - 설치 방법 `apt-get install -y phpmyadmin`
 - 실행 방법 `https:[URL]/phpmyadmin`




> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwNjM1OTg1ODAsLTE3NTYxMDYzMDddfQ
==
-->