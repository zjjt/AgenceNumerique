const schema=`
    type User{
        _id:String
        username:String
        
    }
    type Query{
        user(id: String!):User
    }
    schema{
        query:Query
    }

`;