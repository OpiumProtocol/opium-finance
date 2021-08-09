# Terraform
variable "terraform_version" {
  default = "0.14.2"
}

# GCP
variable "gcp_project" {
  default = "cogent-range-221612"
}

variable "gcp_region" {
  default = "europe-west4"
}

variable "gcp_zone" {
  default = "europe-west4-a"
}

# Secrets
variable "cloudflare_api_token_secret" {
  default = "cloudflare-ofi-dns"
}

# Cloudflare
variable "cloudflare_api_token" {
  default = "OVERRIDE WITH ENV VARIABLE"
}
variable "cloudflare_zone_id" {
  default = "ef3d2fd0fea777afc2eacceada6fad58"
}

# Project
variable "service_name" {
  default = "ofi-landing"
}
variable "domain_base" {
  default = "opium.finance"
}

# Environments
locals {
  environments = [
    # Ethereum
    {
      name = "test"
      subdomain = "landing-test."
      cloudflare_subdomain = "landing-test"
    },
    {
      name = "production"
      subdomain = ""
      cloudflare_subdomain = "@"
    },
  ]
}
