export default (sequelize, DataTypes) => {
	const School = sequelize.define('school', {
		/*
			Model representing a university.
		 */
		name: {
			type: DataTypes.STRING,
		},
	});

	School.associate = (models) => {
	    School.Student = School.hasMany(models.Student, {onDelete: 'cascade'});
    };

	return School;
};
