const { memberDataAccess } = require('../dataAccess');

const getAllMembers = async (req, res, next) => {
    const members = await memberDataAccess.getAll();
  
    res.send(members);
  };

const getMemberById = async (req, res, next) => {
    const member = await memberDataAccess.getById(req.params.id);
  
    if (!member) {
        res.status(404).send('member does not exist');
    }
    res.send(member);
  };

const searchMembers = async (req, res, next) => {
    const members = await memberDataAccess.searchMembers(req.params.name, req.params.status);
  
    res.send(members);
  };

const deleteMember = async (req, res, next) => {
    await memberDataAccess.delete(req.params.id);

    res.sendStatus(200);
  };

const updateMember = async (req, res, next) => {
    const id = req.params.id;
    const payload = req.body;

    await memberDataAccess.update(id, payload);

    res.sendStatus(200);
  };

const insertMember = async (req, res, next) => {
    const payload = req.body;
  
    const member = await memberDataAccess.insert(payload);
  
    res.status(201).send(member);
  };

module.exports = {
  getAllMembers,
  getMemberById,
  searchMembers,
  deleteMember,
  updateMember,
  insertMember
};