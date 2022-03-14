from aws_cdk import (
    # Duration,
    Stack,
    # aws_sqs as sqs,
)
from constructs import Construct

class CfnDevStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # create a cloud9 ec2 environment in a new VPC
        vpc = ec2.Vpc(self, "VPC", max_azs=3)
        cloud9.Ec2Environment(self, "Cloud9Env", vpc=vpc)

        # or create the cloud9 environment in the default VPC with specific instanceType
        default_vpc = ec2.Vpc.from_lookup(self, "DefaultVPC", is_default=True)
        cloud9.Ec2Environment(self, "Cloud9Env2",
            vpc=default_vpc,
            instance_type=ec2.InstanceType("t2.micro")
        )

        # or specify in a different subnetSelection
        c9env = cloud9.Ec2Environment(self, "Cloud9Env3",
            vpc=vpc,
            subnet_selection=ec2.SubnetSelection(
                subnet_type=ec2.SubnetType.PRIVATE
            )
        )

        # print the Cloud9 IDE URL in the output
        CfnOutput(self, "URL", value=c9env.ide_url)