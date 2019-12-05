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
 - 유저 생성 `CREATE USER ID@localhost identified byDATA 'password'`
 - 유저 권한 `GRANT ALL PRIVILEGES *.* TO ID@localhost`
 (모든  권한을 줌 `*.*` 에 DBname.Table을 대입하면 원하는 DB에 권한을 줄수 있음 )
 -  insert, drop, update 등 여러 명령어가 있음 
 -  자세한 명령어 [w3schools ](https://www.w3schools.com/sql/default.asp)
 
### phpMyAdmin 
 -좀더 쉽게 관리하기 위해서 phpMyadmin을 설치 합시다. 
 - 설치 방법 `apt-get install -y phpmyadmin`
 (설치 오류시 `apt-get update` 이후 다시 시도 해볼것) 
 - 실행 하기전 아파치 서버를 재실행  
 - 실행 방법 `https:[URL]/phpmyadmin`
 - 상용법 [https://www.phpmyadmin.net/docs/](https://www.phpmyadmin.net/docs/)




> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3OTI5MTY5NiwtMTA2NjA2MzY4MSw1Mj
UwNTEwMzgsLTEyMDc1OTcxNzYsMzEyNzcyMjIwLC0xMDYzNTk4
NTgwLC0xNzU2MTA2MzA3XX0=
-->