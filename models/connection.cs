using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace mind.map.models
{
    public class connection
    {
        public connection(string name, string description, node left, node right, connectionType type)
        {
            Name = name;
            Description = description;
            Left = left;
            Right = right;
            Type = type;
        }

        public string Name { get; }
        public string Description { get; }
        public node Left { get; }
        public node Right { get; }
        public connectionType Type { get; }
    }
}

