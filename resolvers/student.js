// internal
import {
    genericResolverList,
    genericResolverSingle,
} from '../utils/resolvers';
import {
    genericCreate,
    genericDelete,
    genericUpdate
} from "../utils/mutations";



export default {
    Query: {
        student: (parent, args, {models}) => {
            return genericResolverSingle(parent, args, models.Student);
        },
        students: (parent, args, {models}) => {
            return genericResolverList(parent, args, models.Student);
        },
    },
    Mutation: {
        createStudent: (parent, args, {models}) => {
            return genericCreate(parent, args, models.Student, []);
        },
        updateStudent: (parent, args, {models}) => {
            return genericUpdate(parent, args, models.Student, []);
        },
        deleteStudent: (parent, args, {models}) => {
            return genericDelete(parent, args, models.Student);
        },
    },
};
