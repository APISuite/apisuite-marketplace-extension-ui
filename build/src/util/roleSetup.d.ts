declare type RoleReqs = string | string[] | null | undefined;
export declare type RoleConfig = {
    required?: string[];
    forbidden?: string[];
    selection?: string[];
};
/**
 * Creates an object that indicates which roles are required which are forbidden
 * and of which at least one needs to be present.
 *
 * For example: the following input ['+a', '!b', 'c', 'd'] will return
 * {
 *   required: ['a'],
 *   forbidden: ['b'],
 *   selection: ['c', 'd'],
 * }
 *
 * Based on how scopes work in Hapi:
 * https://hapi.dev/api/?v=20.0.0#-routeoptionsauthaccessscope
 * @param role
 */
export declare const roleSetup: (roleReqs: RoleReqs) => RoleConfig | false;
export declare const validateRoleConfig: (roleReqs: RoleReqs, roles?: string[]) => boolean;
export {};
