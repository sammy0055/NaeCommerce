import { GraphQLScalarType, Kind } from "graphql";
import { isValidObjectId, Types } from "mongoose";
type MongoObjectId = Types.ObjectId;
export const uniqueIDScalar = new GraphQLScalarType({
  name: "UniqueID",
  description: "Unique ID type",
  serialize: (value): string => {
    return (value as MongoObjectId).toString();
  },
  parseValue(value): MongoObjectId {
    if (typeof value === "string" && isValidObjectId(value)) {
      return new Types.ObjectId(value);
    }
    throw new Error("Invalid ID value.");
  },
});
