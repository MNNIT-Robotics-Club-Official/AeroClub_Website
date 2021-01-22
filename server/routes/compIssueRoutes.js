const express = require('express');
const { isSignedIn, isAdmin } = require('../middleware/auth');
const { getComponentById } = require('../middleware/component');
const { requestComponent, getAllRequests, updateRequestStatus ,getMyRequests} = require('../middleware/user');
const router = express.Router();

router.param("componentId", getComponentById);

router.post(
    "/component/request/:componentId", 
    isSignedIn, 
    requestComponent
);
//body{num, reason}

router.get(
    "/component/request/all",
    isSignedIn,
    isAdmin,
    getAllRequests
)

router.get(
    "/component/request/my",
    isSignedIn,
    getMyRequests
)

router.post(
    "/component/request/update/:requestId", 
    isSignedIn, 
    isAdmin,
    updateRequestStatus
);
//body{status}
module.exports = router;