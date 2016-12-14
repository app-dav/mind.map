using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using mind.map.models;

namespace mind.map.services.Controllers
{
    [RoutePrefix("/connection")]
    public class ConnectionController : ApiController
    {
        public IEnumerable<connection> Get()
        {
            throw new NotImplementedException();
        }

        public connection Get(int id)
        {
            throw new NotImplementedException();
        }

        public void Post([FromBody] connection connection)
        {

        }
    }
}
