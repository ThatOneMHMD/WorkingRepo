const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type tech {
    _id: ID
    name: String
  }

  type matchup {
    tech1: String
    tech2: String
    tech1_votes: Int
    tech2_votes: Int
  }

  type Query {
    tech: [tech]
    matchup: [matchup]
  }
`;

module.exports = typeDefs;
