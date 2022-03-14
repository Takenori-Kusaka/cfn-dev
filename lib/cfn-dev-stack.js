"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CfnDevStack = void 0;
const cdk = require("aws-cdk-lib");
const cloud9 = require("aws-cdk-lib/aws-cloud9");
class CfnDevStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const cfnEnvironmentEC2 = new cloud9.CfnEnvironmentEC2(this, 'MyCfnEnvironmentEC2', {
            instanceType: 't2.micro',
            // the properties below are optional
            automaticStopTimeMinutes: 600,
            connectionType: 'CONNECT_SSM',
            description: 'SSM Connect Test',
            imageId: 'amazonlinux-2-x86_64',
            name: 'SSM-Connect-Test',
            // ownerArn: 'ownerArn',
            // repositories: [{
            //   pathComponent: 'pathComponent',
            //   repositoryUrl: 'repositoryUrl',
            // }],
            // subnetId: 'subnetId',
            tags: [{
                    key: 'Name',
                    value: 'SSM-Connect-Test',
                }],
        });
    }
}
exports.CfnDevStack = CfnDevStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2ZuLWRldi1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNmbi1kZXYtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsbUNBQW1DO0FBQ25DLGlEQUFpRDtBQUVqRCxNQUFhLFdBQVksU0FBUSxHQUFHLENBQUMsS0FBSztJQUN4QyxZQUFZLEtBQWMsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDNUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUscUJBQXFCLEVBQUU7WUFDbEYsWUFBWSxFQUFFLFVBQVU7WUFFeEIsb0NBQW9DO1lBQ3BDLHdCQUF3QixFQUFFLEdBQUc7WUFDN0IsY0FBYyxFQUFFLGFBQWE7WUFDN0IsV0FBVyxFQUFFLGtCQUFrQjtZQUMvQixPQUFPLEVBQUUsc0JBQXNCO1lBQy9CLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsd0JBQXdCO1lBQ3hCLG1CQUFtQjtZQUNuQixvQ0FBb0M7WUFDcEMsb0NBQW9DO1lBQ3BDLE1BQU07WUFDTix3QkFBd0I7WUFDeEIsSUFBSSxFQUFFLENBQUM7b0JBQ0wsR0FBRyxFQUFFLE1BQU07b0JBQ1gsS0FBSyxFQUFFLGtCQUFrQjtpQkFDMUIsQ0FBQztTQUNILENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQXhCRCxrQ0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGFjaywgU3RhY2tQcm9wcyB9IGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCAqIGFzIGNsb3VkOSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtY2xvdWQ5JztcblxuZXhwb3J0IGNsYXNzIENmbkRldlN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5BcHAsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcbiAgICBjb25zdCBjZm5FbnZpcm9ubWVudEVDMiA9IG5ldyBjbG91ZDkuQ2ZuRW52aXJvbm1lbnRFQzIodGhpcywgJ015Q2ZuRW52aXJvbm1lbnRFQzInLCB7XG4gICAgICBpbnN0YW5jZVR5cGU6ICd0Mi5taWNybycsXG4gICAgXG4gICAgICAvLyB0aGUgcHJvcGVydGllcyBiZWxvdyBhcmUgb3B0aW9uYWxcbiAgICAgIGF1dG9tYXRpY1N0b3BUaW1lTWludXRlczogNjAwLFxuICAgICAgY29ubmVjdGlvblR5cGU6ICdDT05ORUNUX1NTTScsXG4gICAgICBkZXNjcmlwdGlvbjogJ1NTTSBDb25uZWN0IFRlc3QnLFxuICAgICAgaW1hZ2VJZDogJ2FtYXpvbmxpbnV4LTIteDg2XzY0JyxcbiAgICAgIG5hbWU6ICdTU00tQ29ubmVjdC1UZXN0JyxcbiAgICAgIC8vIG93bmVyQXJuOiAnb3duZXJBcm4nLFxuICAgICAgLy8gcmVwb3NpdG9yaWVzOiBbe1xuICAgICAgLy8gICBwYXRoQ29tcG9uZW50OiAncGF0aENvbXBvbmVudCcsXG4gICAgICAvLyAgIHJlcG9zaXRvcnlVcmw6ICdyZXBvc2l0b3J5VXJsJyxcbiAgICAgIC8vIH1dLFxuICAgICAgLy8gc3VibmV0SWQ6ICdzdWJuZXRJZCcsXG4gICAgICB0YWdzOiBbe1xuICAgICAgICBrZXk6ICdOYW1lJyxcbiAgICAgICAgdmFsdWU6ICdTU00tQ29ubmVjdC1UZXN0JyxcbiAgICAgIH1dLFxuICAgIH0pO1xuICB9XG59Il19