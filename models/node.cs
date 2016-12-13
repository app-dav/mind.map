using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mind.map.models
{
    public class node
    {
        public node(string name, string description) {
            Name = name;
            Description = description;
        }
        public string Name { get; }
        public string Description { get; }
    }
}
