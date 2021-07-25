const express = require('express');
const app = express();
const { eventRouter, memberRouter, attendanceRouter } = require('./routers');

app.use(express.urlencoded({ extended: true }));
app.use(express.raw({ type: 'text/html' }));
app.use(express.json());

app.use('/events', eventRouter);
app.use('/members', memberRouter);
app.use('/attendance', attendanceRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is now up listening on port ${port}`);
});