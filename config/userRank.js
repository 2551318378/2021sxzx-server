const userRank = {
    'Admin': {
        id: 0,
        name: '管理员',
        can_see: [],
        can_operate: []
    },
    'Business': {
        id: 1,
        name: '业务员',
        can_see: [],
        can_operate: []
    },
    'FirstAudit': {
        id: 2,
        name: '一级审核员',
        can_see: [],
        can_operate: []
    },
    'SecondAudit': {
        id: 3,
        name: '二级审核员',
        can_see: [],
        can_operate: []
    }
}

module.exports = userRank