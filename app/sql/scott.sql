SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for dept
-- ----------------------------
DROP TABLE IF EXISTS dept;
CREATE TABLE dept  (
  deptno int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  dname varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  loc varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (deptno) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 55 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Table structure for emp
-- ----------------------------
DROP TABLE IF EXISTS emp;
CREATE TABLE emp  (
  empno int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  ename varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  job varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  mgr int(10) UNSIGNED DEFAULT NULL,
  hiredate date DEFAULT NULL,
  sal decimal(7, 2) DEFAULT NULL,
  comm decimal(7, 2) DEFAULT NULL,
  deptno int(10) UNSIGNED DEFAULT NULL,
  PRIMARY KEY (empno) USING BTREE,
  INDEX deptno(deptno) USING BTREE,
  CONSTRAINT emp_ibfk_1 FOREIGN KEY (deptno) REFERENCES dept (deptno) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 8005 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;


SET FOREIGN_KEY_CHECKS = 1;
