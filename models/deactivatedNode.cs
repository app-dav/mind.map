using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mind.map.models
{
    public class deactivatedNode 
    {
        public deactivatedNode(node nod)
        {
            innerNode = nod;
        }

        node innerNode;
    }
}
