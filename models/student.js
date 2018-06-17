export default (sequelize, DataTypes) => {
	const Student = sequelize.define('student', {
		/*
			Model representing a student in a university.
		 */
		firstName: {
			type: DataTypes.STRING,
		},
		lastName: {
			type: DataTypes.STRING,
		},
		graduated: {
			type: DataTypes.BOOLEAN,
		}
	});

	return Student;
};
