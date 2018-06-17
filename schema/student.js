export default `
    type Student {
        id: ID!
        firstName: String
        lastName: String
        graduated: Boolean
    }
    
    input StudentCreateInput {
        firstName: String!
        lastName: String!
        graduated: Boolean!
    }
    
    input StudentUpdateInput {
        id: ID!
        firstName: String
        lastName: String
        graduated: Boolean
    }
    
    type Query {
        
        student(
            id: ID!
            ): Student
        
        students(
            # A limit over how many objects are returned as specified http://docs.sequelizejs.com/manual/tutorial/querying.html#pagination-limiting
            take: Int
            
            # An offset determining how many objects should be skipped when returning as specified http://docs.sequelizejs.com/manual/tutorial/querying.html#pagination-limiting
            skip: Int
            
            # A JSON object conforming the the shape specified http://docs.sequelizejs.com/en/latest/docs/querying/
            where: JSON
            
            # An array of an array of strings in the form [[\\'field\\',\\'ASC|DESC\\']] as specified http://docs.sequelizejs.com/en/latest/docs/querying/#ordering
            order: [[String]]
            ): [Student]   
    }
   
    type Mutation {
    
        createStudent(
            schoolId: ID!
            firstName: String!
		    lastName: String!
		    graduated: Boolean!
            ): Student
           
        updateStudent(
            id: ID!
            firstName: String
            lastName: String
            graduated: Boolean
            schoolId: ID
            ): Student
            
        deleteStudent(
            id: ID!
        ): Student
    }
`;
