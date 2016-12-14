/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
     * etc. depending on your default view engine) your home page.              *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/

    '/': {
        view: 'homepage'
    },


  'get /entity/:id':
  {
    controller: 'entity',
    action: 'show'
  },

  'post /entity':
  {
    controller: 'entity',
    action: 'create'
  },

  'put /entity/:id':
  {
    controller: 'entity',
    action: 'update'
  },

  'delete /entity/:id':
  {
    controller: 'entity',
    action: 'destroy'
  },

 //routes for fields
 'post /fields':
 {
  controller: 'fields',
  action: 'create'
 } ,

 'get /fields':
 {
  controller: 'fields',
  action: 'show'
 },

 'put /fields/:id':
 {
  controller: 'fields',
  action: 'update'
 },

 'delete /fields/:id':
 {
  controller: 'fields',
  action: 'destroy'
},
    //routes for peoples

  'get /peoples':
  {
    controller: 'people',
    action: 'show'
  },
  'post /peoples':
  {
    controller: 'people',
    action: 'create'
  },
  'put /peoples/:id':
  {
    controller: 'people',
    action: 'update'
  },
  'delete /peoples/:id':
  {
    controller: 'people',
    action: 'destroy'
  },

  //routes for groups
  'get /groups':
  {
    controller: 'group',
    action: 'show'
  },
  'post /groups':
  {
    controller: 'group',
    action: 'create'
  },
  'put /groups/:id':
  {
    controller: 'group',
    action: 'update'
  },
  'delete /groups/:id':
  {
    controller: 'group',
    action: 'destroy'
  },

    'get /rules': {
        controller: 'rule',
        action: 'index'
    },

    'get /rules/:id': {
        controller: 'rule',
        action: 'show'
    },

    'get /rules/new': {
        controller: 'rule',
        action: 'new'
    },

    'post /rules': {
        controller: 'rule',
        action: 'create'
    },

    'get /rules/edit/:id': {
        controller: 'rule',
        action: 'edit'
    },

    'put /rules/:id': {
        controller: 'rule',
        action: 'update'
    },

    'delete /rules/:id': {
        controller: 'rule',
        action: 'destroy'
    },

    'get /nestedconditions': {
        controller: 'nestedCondition',
        action: 'index'
    },

    'get /nestedconditions/:id': {
        controller: 'nestedCondition',
        action: 'show'
    },

    'get /nestedconditions/new': {
        controller: 'nestedCondition',
        action: 'new'
    },

    'post /nestedconditions': {
        controller: 'nestedCondition',
        action: 'create'
    },

    'get /nestedconditions/edit/:id': {
        controller: 'nestedCondition',
        action: 'edit'
    },

    'put /nestedconditions/:id': {
        controller: 'nestedCondition',
        action: 'update'
    },

    'delete /nestedconditions/:id': {
        controller: 'nestedCondition',
        action: 'destroy'
    },

    'get /singleconditions': {
        controller: 'singleCondition',
        action: 'index'
    },

    'get /singleconditions/:id': {
        controller: 'singleCondition',
        action: 'show'
    },

    'get /singleconditions/new': {
        controller: 'singleCondition',
        action: 'new'
    },

    'post /singleconditions': {
        controller: 'singleCondition',
        action: 'create'
    },

    'get /singleconditions/edit/:id': {
        controller: 'singleCondition',
        action: 'edit'
    },

    'put /singleconditions/:id': {
        controller: 'singleCondition',
        action: 'update'
    },

    'delete /singleconditions/:id': {
        controller: 'singleCondition',
        action: 'destroy'
    },

    'get /customersegments': {
        controller: 'customerSegment',
        action: 'index'
    },

    'get /customersegments/:id': {
        controller: 'customerSegment',
        action: 'show'
    },

    'get /customersegments/new': {
        controller: 'customerSegment',
        action: 'new'
    },

    'post /customersegments': {
        controller: 'customerSegment',
        action: 'create'
    },

    'get /customersegments/edit/:id': {
        controller: 'customerSegment',
        action: 'edit'
    },

    'put /customersegments/:id': {
        controller: 'customerSegment',
        action: 'update'
    },

    'delete /customersegments/:id': {
        controller: 'customerSegment',
        action: 'destroy'
    },

    'get /operatorfunctions': {
        controller: 'operatorFunction',
        action: 'index'
    },

    'get /operatorfunctions/:id': {
        controller: 'operatorFunction',
        action: 'show'
    },

    'get /operatorfunctions/new': {
        controller: 'operatorFunction',
        action: 'new'
    },

    'post /operatorfunctions': {
        controller: 'operatorFunction',
        action: 'create'
    },

    'get /operatorfunctions/edit/:id': {
        controller: 'operatorFunction',
        action: 'edit'
    },

    'put /operatorfunctions/:id': {
        controller: 'operatorFunction',
        action: 'update'
    },

    'delete /operatorfunctions/:id': {
        controller: 'operatorFunction',
        action: 'destroy'
    },

    // routes for templates

    'get /templates/:id': {
        controller: 'template',
        action: 'show'
    },
    'post /templates': {
        controller: 'template',
        action: 'create'
    },
    'put /templates/:id': {
        controller: 'template',
        action: 'update'
    },
    'delete /templates/:id': {
        controller: 'template',
        action: 'destroy'
    },

    //routes for email

    'get /email': {
        controller: 'email',
        action: 'show'
    },
    'post /email': {
        controller: 'email',
        action: 'create'
    },

    'put /email/:id': {
        controller: 'email',
        action: 'update'
    },

    'delete /email/:id': {
        controller: 'email',
        action: 'destroy'
    },

    //routes for fcm

    'post /pushNotification': {
        controller: 'pushNotification',
        action: 'create'
    },

    'put /pushNotification/:id': {
        controller: 'pushNotification',
        action: 'update'
    },

    'delete /pushNotification/:id': {
        controller: 'pushNotification',
        action: 'destroy'
    },

    //routes for sms

    'get /sms': {
        controller: 'sms',
        action: 'show'
    },
    'post /sms': {
        controller: 'sms',
        action: 'create'
    },

    'put /sms/:id': {
        controller: 'sms',
        action: 'update'
    },

    'delete /sms/:id': {
        controller: 'sms',
        action: 'destroy'
    },
    //routes for webpush

    'get /webpush': {
        controller: 'webpush',
        action: 'show'
    },
    'post /webpush': {
        controller: 'webpush',
        action: 'create'
    },

    'put /webpush/:id': {
        controller: 'webpush',
        action: 'update'
    },

    'delete /webpush/:id': {
        controller: 'webpush',
        action: 'destroy'
    },


    //routes for channels 
    'get /channel': {
        controller: 'channel',
        action: 'show'
    },
    'post /channel': {
        controller: 'channel',
        action: 'create'
    },
    'put /channel/:id': {
        controller: 'channel',
        action: 'update'
    },
    'delete /channel/:id': {
        controller: 'channel',
        action: 'destroy'
    },

    //routes for escalation


    'get /escalation/:id': {
        controller: 'escalation',
        action: 'show'
    },
    'post /escalation': {
        controller: 'escalation',
        action: 'create'
    },
    'put /escalation/:id': {
        controller: 'escalation',
        action: 'update'
    },
    'delete /escalation/:id': {
        controller: 'escalation',
        action: 'destroy'
    },


    //routes for campaigns
    'get /campaigns': {
        controller: 'campaign',
        action: 'show'
    },
    'post /campaigns': {
        controller: 'campaign',
        action: 'create'
    },
    'put /campaigns/:id': {
        controller: 'campaign',
        action: 'update'
    },
    'delete /campaigns/:id': {
        controller: 'campaign',
        action: 'destroy'
    }
    /***************************************************************************
     *                                                                          *
     * Custom routes here...                                                    *
     *                                                                          *
     * If a request to a URL doesn't match any of the custom routes above, it   *
     * is matched against Sails route blueprints. See `config/blueprints.js`    *
     * for configuration options and examples.                                  *
     *                                                                          *
     ***************************************************************************/

};
