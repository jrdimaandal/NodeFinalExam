const { memberDataAccess } = require('../dataAccess');

const getAllMembers = async (req, res, next) => {
    const users = await memberDataAccess.getAll();
  
    res.send(users);
  };

const getMemberById = async (req, res, next) => {
    const user = await memberDataAccess.getById(req.params.username);
  
    if (!user) {
        res.status(404).send('member does not exist');
    }
    res.send(user);
  };

const searchMembers = async (req, res, next) => {
    const user = await memberDataAccess.searchMembers(req.params.emailAddress);
  
    res.send(user);
  };

const deleteMember = async (req, res, next) => {
    await memberDataAccess.delete(req.params.username);

    res.sendStatus(200);
  };

const updateMember = async (req, res, next) => {
    const username = req.params.username;
    const payload = req.body;

    await memberDataAccess.update(username, payload);

    res.sendStatus(200);
  };

const insertMember = async (req, res, next) => {
    const payload = req.body;
  
    const user = await memberDataAccess.insert(payload);
  
    res.status(201).send(user);
  };

module.exports = {
  getAllMembers,
  getMemberById,
  searchMembers,
  deleteMember,
  updateMember,
  insertMember
};