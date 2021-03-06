const options = {
    manager: require('../../../../src/managers/manufacture/design-tracking-board-manager'),
    model: require('bateeq-models').manufacture.DesignTrackingBoard,
    util: require('../../../data-util/manufacture/design-tracking-board-data-util'),
    validator: require('bateeq-models').validator.manufacture.designTrackingBoard,
    createDuplicate: false,
    keys: []
};

const basicTest = require('../../../basic-test-factory');
basicTest(options);
