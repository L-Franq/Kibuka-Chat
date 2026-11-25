const prisma = require("../config/db");

const insertUser = async (req, res) => {
  try {
    const { externalId, username, createdAt } = req.body;

    const user = await prisma.user.create({
      data: {
        externalId,
        username,
        createdAt,
      },
    });

    return res.status(201).json({ message: user });
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(400).json({ message: "Usuario ja registado." });
    }
    console.error(error);
    return res.status(500).json({ message: "Erro Interno ao criar usuario!" });
  }
};

module.exports = { insertUser };
