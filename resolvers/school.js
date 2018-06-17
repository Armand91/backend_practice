// internal
import {
    genericResolverList,
    genericResolverNestedList,
    genericResolverSingle,
} from '../utils/resolvers';
import {
    genericCreate,
    genericDelete,
    genericUpdate
} from "../utils/mutations";
import models from '../models';
//external
const embed = require('sequelize-embed')(models.sequelize);
const mkInclude = embed.util.helpers.mkInclude;


export default {
    School: {
        students: (parent, args, { models } ) => {
            return genericResolverNestedList(parent, args, models.Student, 'schoolId');
        },
    },
    Query: {
        school: (parent, args, { models }) => {
            return genericResolverSingle(parent, args, models.School);
        },
        schools: (parent, args, { models }) => {
            return genericResolverList(parent, args, models.School);
        },
    },
    Mutation: {
        createSchool: (parent, args, { models }) => {
            const includedFields = [{ all: true, nested: true }];
            return genericCreate(parent, args, models.School, includedFields);
        },
        updateSchool: (parent, args, { models }) => {
            const includedFields = [];
            if (args.students !== undefined) {
                includedFields.push(mkInclude(models.School.Student));
            }
            return genericUpdate(parent, args, models.School, includedFields);
        },
        deleteSchool: (parent, args, { models }) => {
            return genericDelete(parent, args, models.School);
        },
    },
};
