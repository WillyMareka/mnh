UPDATE `mnh_rest`.`questions` SET `question_name`='Did provider use the IMCI Chart Booklet?' WHERE `question_id`='88';
UPDATE `mnh_rest`.`questions` SET `question_for`='obsx' WHERE `question_id`='90';
UPDATE `mnh_rest`.`questions` SET `question_name`='Did the provider use the under five register to document assessemnt & classification?' WHERE `question_id`='89';
UPDATE `mnh_rest`.`questions` SET `question_name`='Did provider teach and instruct caregiver to give medicine to child?' WHERE `question_id`='92';
UPDATE `mnh_rest`.`questions` SET `question_name`='Did he/she use caregiver\'s card?' WHERE `question_id`='98';
UPDATE `mnh_rest`.`questions` SET `question_name`='Was caregiver satisfied with the service offered?' WHERE `question_id`='99';
UPDATE `mnh_rest`.`questions` SET `question_name`='Who advises caregiver?' WHERE `question_id`='100';
UPDATE `mnh_rest`.`questions` SET `question_name`='Did caregiver explain correctly how to give medicine?' WHERE `question_id`='101';
UPDATE `mnh_rest`.`questions` SET `question_name`='Did provider explain correctly how to take care of child at home?' WHERE `question_id`='102';
UPDATE `mnh_rest`.`questions` SET `question_name`='Is there any available seating area for caregiver and child?' WHERE `question_id`='80';
UPDATE `mnh_rest`.`questions` SET `question_name`='Waiting space for caregiver and children?' WHERE `question_id`='85';
UPDATE `mnh_rest`.`questions` SET `question_name`='IMCI chart booklet' WHERE `question_id`='84';
UPDATE `mnh_rest`.`questions` SET `question_name`='Does the facility have updated 2012 IMCI guidelines/chart booklets?' WHERE `question_id`='66';
UPDATE `mnh_rest`.`questions` SET `question_name`='Does the facility have updated Integrated Community Case Management/Community IMCI (ICCM) guidelines?' WHERE `question_id`='68';
INSERT INTO `mnh_rest`.`questions` (`question_code`, `question_name`, `question_for`) VALUES ('QUC24', '2012 PMTCT guidelines ', 'gp');
INSERT INTO `mnh_rest`.`questions` (`question_code`, `question_name`, `question_for`) VALUES ('QUC25', 'ART guidelines ', 'gp');
INSERT INTO `mnh_rest`.`questions` (`question_code`, `question_name`, `question_for`) VALUES ('QUC26', 'Early Infant Diagnosis Algorithm', 'gp');
