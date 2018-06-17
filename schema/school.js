export default `
	type School {
		id: ID!
		name: String
		students(
		    # A limit over how many objects are returned as specified http://docs.sequelizejs.com/manual/tutorial/querying.html#pagination-limiting
            take: Int
            
            # An offset determining how many objects should be skipped when returning as specified http://docs.sequelizejs.com/manual/tutorial/querying.html#pagination-limiting
            skip: Int
            
            # A JSON object conforming the the shape specified http://docs.sequelizejs.com/en/latest/docs/querying/
            where: JSON
            
            # An array of an array of strings in the form [[\\'field\\',\\'ASC|DESC\\']] as specified http://docs.sequelizejs.com/en/latest/docs/querying/#ordering
            order: [[String]]): [Student]
	}
   
	type Query {
    
        school(
            id: ID!
        ): School
        
        schools(
            # A limit over how many objects are returned as specified http://docs.sequelizejs.com/manual/tutorial/querying.html#pagination-limiting
            take: Int
            
            # An offset determining how many objects should be skipped when returning as specified http://docs.sequelizejs.com/manual/tutorial/querying.html#pagination-limiting
            skip: Int
            
            # A JSON object conforming the the shape specified http://docs.sequelizejs.com/en/latest/docs/querying/
            where: JSON
            
            # An array of an array of strings in the form [[\\'field\\',\\'ASC|DESC\\']] as specified http://docs.sequelizejs.com/en/latest/docs/querying/#ordering
            order: [[String]]
            ): [School]    
    }
    
    type Mutation {
    
        createSchool(
            name: String!
            students: [StudentCreateInput]
            ): School
           
        updateSchool(
            id: ID!
            name: String
            students: [StudentUpdateInput]
            ): School
            
        deleteSchool(
            id: ID!
        ): School
    }
`;
