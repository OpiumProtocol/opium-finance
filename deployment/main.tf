terraform {
  required_providers {
    google = {
      source = "hashicorp/google"
      version = "3.50.0"
    }
    google-beta = {
      source = "hashicorp/google-beta"
      version = "3.50.0"
    }
    cloudflare = {
      source = "cloudflare/cloudflare"
      version = "2.14.0"
    }
  }
  
  ################################
  ### !!! HARDCODED VALUES !!! ###
  ################################
  backend "gcs" {
    bucket  = "cogent-range-221612-terraform"
    prefix  = "ofi-landing"
  }
}

# GCP
provider "google" {
  project = var.gcp_project
  region = var.gcp_region
  zone = var.gcp_zone
}

provider "google-beta" {
  project = var.gcp_project
  region = var.gcp_region
  zone = var.gcp_zone
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

# Modules

module "storage" {
  source = "./storage"

  gcp_project = var.gcp_project
  gcp_region = var.gcp_region

  cloudflare_zone_id = var.cloudflare_zone_id
  
  environments = local.environments

  service_name = var.service_name
  domain_base = var.domain_base
}
