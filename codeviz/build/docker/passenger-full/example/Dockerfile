
# -------------------------------------------------------------------------------------------------
# BUILD FROM IMAGE: phusion/passenger-full
#
#	DOCUMENTATION:
# 					 URL: github.com/phusion/passenger-docker
#		VERSION-INFO: github.com/phusion/passenger-docker/blob/master/Changelog.md
# -------------------------------------------------------------------------------------------------

FROM phusion/passenger-full:latest
MAINTAINER Ernst Salzmann <ErnstSalzmann@gmail.com>

# -------------------------------------------------------------------------------------------------
# Set correct environment variables.
# -------------------------------------------------------------------------------------------------

ENV HOME /root

# -------------------------------------------------------------------------------------------------
# Run baseimage-docker's init process.
# -------------------------------------------------------------------------------------------------

CMD ["/sbin/my_init"]

# -------------------------------------------------------------------------------------------------
# expose port 80 and 433
# -------------------------------------------------------------------------------------------------

EXPOSE 80 443

# -------------------------------------------------------------------------------------------------
# Define mountable directories.
# -------------------------------------------------------------------------------------------------

# VOLUME ["/data"]

# -------------------------------------------------------------------------------------------------
# Define working directory.
# -------------------------------------------------------------------------------------------------

# WORKDIR /data
# WORKDIR /root

# -------------------------------------------------------------------------------------------------
# Adding your web app to the image
#		URL: github.com/phusion/passenger-docker#adding_web_app
# -------------------------------------------------------------------------------------------------

# ADD config/webapp.conf /etc/nginx/sites-enabled/webapp.conf
# RUN mkdir /home/app/webapp
# ADD <src> /home/app/webapp

# -------------------------------------------------------------------------------------------------
# Configuring Nginx
# 	URL: github.com/phusion/passenger-docker#configuring_nginx
# -------------------------------------------------------------------------------------------------

# ADD config/secret_key.conf /etc/nginx/main.d/secret_key.conf
# ADD config/gzip_max.conf /etc/nginx/conf.d/gzip_max.conf

# -------------------------------------------------------------------------------------------------
# Nginx and Passenger are disabled by default. 
# 	Enable them using:
# -------------------------------------------------------------------------------------------------

# RUN rm -f /etc/service/nginx/down

# -------------------------------------------------------------------------------------------------
# Setting environment variables in Nginx
#		URL: github.com/phusion/passenger-docker#nginx_env_vars
# -------------------------------------------------------------------------------------------------

# ADD config/<filename>-env.conf /etc/nginx/main.d/<filename>-env.conf

# -------------------------------------------------------------------------------------------------
# Running scripts during container startup
# 	URL: github.com/phusion/passenger-docker#running_startup_scripts
# -------------------------------------------------------------------------------------------------

# RUN mkdir -p /etc/my_init.d
# ADD logtime.sh /etc/my_init.d/logtime.sh

# -------------------------------------------------------------------------------------------------
# Using your own key, Install an SSH of your choice.
#		URL: github.com/phusion/passenger-docker#using_your_own_key
# -------------------------------------------------------------------------------------------------

# ADD your_key /tmp/your_key
# RUN cat /tmp/your_key >> /root/.ssh/authorized_keys && rm -f /tmp/your_key

# -------------------------------------------------------------------------------------------------
# Clean up APT when done.
# -------------------------------------------------------------------------------------------------

# RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# -------------------------------------------------------------------------------------------------
# Finally, define an Entry Point
# -------------------------------------------------------------------------------------------------

ENTRYPOINT --rm -t -i phusion/passenger-full bash -l

# -------------------------------------------------------------------------------------------------
# END
# -------------------------------------------------------------------------------------------------
