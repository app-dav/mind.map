using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using mind.map.models;

namespace mind.map.Controllers
{
    [RoutePrefix("/node")]
    public class NodeController : ApiController
    {
        public IEnumerable<node> Get()
        {
            throw new NotImplementedException();
        }

        public node Get(int id)
        {
            throw new NotImplementedException();
        }

        public void Post([FromBody] node nod)
        {

        }
    }
}
