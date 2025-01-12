provider "aws" {
  region = "us-east-1" # Change to your preferred region
}

resource "aws_iam_role" "lambda_execution_role" {
  name = "LambdaExecutionRole-pulivarthi"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_policy_attachment" "attach_lambda_policy" {
  name       = "AttachLambdaPolicy-pulivarthi"
  roles      = [aws_iam_role.lambda_execution_role.name]
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

data "archive_file" "lambda_zip" {
  type        = "zip"
  source_dir  = "${path.module}/src"
  output_path = "${path.module}/hello-world.zip"
}

resource "aws_lambda_function" "nodejs_lambda" {
  function_name = "hello-world"
  role          = aws_iam_role.lambda_execution_role.arn
  runtime       = "nodejs22.x" # Adjust runtime as needed
  handler       = "index.handler"
  filename      = data.archive_file.lambda_zip.output_path
  # Ensure that Lambda is updated when the code changes by using the hash
  source_code_hash = filebase64sha256("hello-world.zip")
}
