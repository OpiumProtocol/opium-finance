variable "gcp_project" {}
variable "gcp_region" {}
variable "environments" {}

variable "cloudflare_zone_id" {}

variable "service_name" {}
variable "domain_base" {}

resource "google_storage_bucket" "assets" {
  count = length(var.environments)

  name  = "${var.environments[count.index].subdomain}${var.domain_base}"
  location      = "EU"
  storage_class = "MULTI_REGIONAL"
  website {
    main_page_suffix = "index.html"
    not_found_page   = "404.html"
  }
}

resource "google_storage_bucket_iam_member" "viewer" {
  count = length(var.environments)

  bucket = "${var.environments[count.index].subdomain}${var.domain_base}"
  role   = "roles/storage.objectViewer"
  member = "allUsers"

  depends_on = [ google_storage_bucket.assets ]
}

# Cloudflare
resource "cloudflare_record" "default" {
  count = length(var.environments)

  zone_id = var.cloudflare_zone_id
  name = var.environments[count.index].cloudflare_subdomain
  type = "CNAME"
  value = "c.storage.googleapis.com"
  ttl = 1
  proxied = true
}
