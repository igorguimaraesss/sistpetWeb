require("dotenv").config();

const dbo = require("../db/conn");
const { ObjectId } = require("mongodb");
const collName = "users";

module.exports = {
  async create(matchUser, callbackAtlasResponse) {
    const dbConnect = dbo.getDb();

    await dbConnect
      .collection(collName)
      .insertOne(matchUser, callbackAtlasResponse);
  },

  async deleteByUsername(req, res, next) {},

  async update(req, res, next) {},

  async getUserById(userId) {
    const dbConnect = dbo.getDb();
    return await dbConnect.collection(collName).findOne({
      _id: ObjectId(userId),
    });
  },

  async getByUsername(username) {
    const dbConnect = dbo.getDb();

    return await dbConnect.collection(collName).findOne(
      {
        $where: () => {
          return this.username == username;
        },
      },
      {
        username: username,
      },
      {
        projection: {
          _id: 1,
          username: 1,
          pwd: 1,
        },
      }
    );
  },
};
