openstack-cli-auth extension for Firefox
========================================

# Why do I need this?

The `openstack` command-line interface requires an authentication token to access the API.
When you enable two-factor authentication to access the API, the CLI will cease to work.

The usual solution is to create an application token that allows API access and to
download it. However, this defeats the point of two-factor authentication, since this
token will be usable without the second factor.

This extension for Firefox allows the CLI to work with 2FA in openstack.

# How does it work?

You start by downloading the `clouds.yaml` file that Horizon (the openstack web
interface) generates for you and put it in `~/.config/openstack/`.

The user logs on Horizon, using 2FA. At the time Keystone generates a valid authentication
token, the extension will “steal” the token and send it to a script that modifies your
`clouds.yaml` file.

From that moment, the `openstack` command can use the token for the time it remains valid.

# How do I install it?

There’s Debian packaging included. You can mimic what it does easily on other Linux
distributions.

# Can it support Chrome/Windows/whatever my setup is?

It can probably with small changes. We mostly haven’t bothered to test this.
Patches to support other setups will be welcome.
