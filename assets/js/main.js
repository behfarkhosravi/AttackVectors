(function ($) {


  var treeData =
  {
    "name": "Attack-Vectors",
    "children": [
      {
        name: "OSI Modell",
        children: [{
            name: "Application Layer",
            children: [{
                name: "Malicious Program Infection"
            }, {
                name: "Phissing Attack"
            }, {
                name: "Smart Contract Vulnerabilities"
            }, {
                name: "Session Hijacking"
            }]
        }, {
            name: "Network Layer",
            children: [{
                name: "Attack Aimed at the Cluster Tree"
            }, {
                name: "Flooding"
            }, {
                name: "Void Address Attack"
            }, {
                name: "Node Consensus Attack"
            }, {
                name: "Exchange DDoS"
            }, {
                name: "MITM Attack"
            }, {
                name: "Eclipse Attack"
            }, {
                name: "BGP Hijacking"
            }]
        }, {
            name: "Data Link Layer",
            children: [{
                name: "Link Layer Jamming (Intended to create DoS)",
                children: [{
                    name: "Random Jamming"
                }, {
                    name: "Intelligent Jamming"
                }]
            }, {
                name: "Exhaustion",
                children: [{
                    name: "Node specific flooding"
                }]
            }, {
                name: "Collison",
                children: [{
                    name: "Back up Manipulation",
                    children: [{
                        name: "Battery Life Extension(BLE) Pretense"
                    }, {
                        name: "Constant Back-Off Exponent"
                    }, {
                        name: "Random Number Generator"
                    }, {
                        name: "Backoff Countdown Ommission"
                    }]
                }]
            }, {
                name: "Clear Channel Assesment(CCA) Manipulation",
                children: [{
                    name: "CCA Reduction"
                }, {
                    name: "CCA Ommission"
                }]
            }, {
                name: "Same-Nonce Attack"
            }, {
                name: "Replay-Protection Attack"
            }, {
                name: "Acknowledgement(ACK Attacks)"
            }, {
                name: "Man in the Middle Attack"
            }, {
                name: "Guaranteed Time Slot(GTS) Attacks"
            }, {
                name: "Host Security"
            }, {
                name: "Quantum Attack"
            }, {
                name: "Length Expansion attack"
            }, {
                name: "Backdoor Attack"
            }, {
                name: "Brute Force Attack"
            }]
        }, {
            name: "Physical Layer",
            children: [{
                name: "Jamming",
                children: [{
                    name: "Radio Jamming",
                    children: [{
                        name: "Wide-Band Denial"
                    }, {
                        name: "Pulse-Band Denial",
                        children: [{
                            name: "Constant"
                        }, {
                            name: "Deceptive"
                        }, {
                            name: "Random"
                        }, {
                            name: "Reactive",
                            children: [{
                                name: "Interrupt"
                            }, {
                                name: "Activity"
                            }, {
                                name: "Scan"
                            }, {
                                name: "Node-Specific Denial"
                            }, {
                                name: "Message-Specific Denial"
                            }]
                        }]
                    }, {
                        name: "PHY Payload COrruption"
                    }, {
                        name: "FCS Corruption"
                    }]
                }]
            }, {
                name: "Tampering",
                children: [{
                    name: "Message Manipulation",
                    children: [{
                        name: "Symbol Flipping"
                    }, {
                        name: "Signal Overshadowing"
                    }]
                }]
            }, {
                name: "Steganography Attacks"
            }, {
                name: "Unauthorized access to exchange Server"
            }]
        }]
    }, {
        name: "Network",
        children: [{
            name: "PKI"
        }, {
            name: "Protocols",
            children: [{
                name: "Bluetooth",
                children: [{
                    name: "Bluejacking"
                }, {
                    name: "Bluesnarf++"
                }, {
                    name: "Blue bump"
                }, {
                    name: "Bluesmack"
                }]
            }, {
                name: "Zigbee",
                children: [{
                    name: "Jamming(Wireless equivalent of DoS attack)"
                }, {
                    name: "Collison Attack"
                }, {
                    name: "Void Address Attack"
                }, {
                    name: "Route disruption in the cluster tree"
                }, {
                    name: "Attack through compromised cooidinator"
                }]
            }]
        }]
    }, {
        name: "physical Security",
        children: [{
            name: "Cloud & Outsourcing",
            children: [{
                name: "Access by service provider"
            }]
        }, {
            name: "On Premise",
            children: [{
                name: "Access by employees"
            }, {
                name: "Access by guests"
            }]
        }]
    }, {
        name: "Hardware",
        children: [{
            name: "NFC(Near Field Communication)",
            children: [{
                name: "Eavesdropping attack"
            }, {
                name: "Data Corruption Attack(A basic Dos Attack)"
            }, {
                name: "Data Insertion Attack"
            }]
        }, {
            name: "Host Computers",
            children: [{
                name: "Access as user"
            }]
        }]
    }, {
        name: "Users & Roles",
        children: [{
            name: "Phishing Emails"
        }]
    }, {
        name: "Blockchain",
        children: [{
            name: "Smart Contracts",
            children: [{
                name: "Ethereum / EVM",
                children: [{
                    name: "Over/Underflows"
                }, {
                    name: "Reentrancy"
                }, {
                    name: "Timestamp based Attacks"
                }, {
                    name: "Frontrunning"
                }, {
                    name: "Short address attacks"
                }, {
                    name: "Role Based Access Control Privilege Escalation"
                }]
            }, {
                name: "Smart contract DoS"
            }, {
                name: "Code Injection"
            }]
        }, {
            name: "Theft of Private Keys / Wallet theft",
            children: [{
                name: "Social Engineering",
                children: [{
                    name: "Phishing"
                }, {
                    name: "USB Drop"
                }, {
                    name: "Dumpster Diving"
                }]
            }, {
                name: "Brute Force"
            }]
        }, {
            name: "Cryptography",
            children: [{
                name: "Brute Force"
            }, {
                name: "Quantum Computing"
            }]
        }, {
            name: "Peer to peer system",
            children: [{
                name: "DNS Hijacking"
            }, {
                name: "BGP Hijacking"
            }, {
                name: "DoS Attacks"
            }, {
                name: "Front Running"
            }, {
                name: "Consensus Delay"
            }, {
                name: "Blacklisting"
            }, {
                name: "Eclipse Attacks",
                children: [{
                    name: "Timejacking attacks"
                }]
            }]
        }, {
            name: "Blockchain application",
            children: [{
                name: "Blockchain Ingestion"
            }, {
                name: "Crytojacking",
                children: [{
                    name: "Mining Malware"
                }]
            }, {
                name: "Transaction Malleability"
            }]
        }, {
            name: "Consensus Algorithm",
            children: [{
                name: "Majority Attacks",
                children: [{
                    name: "PoS Based",
                    children: [{
                        name: "Fake Stake Attack"
                    }, {
                        name: "Stake amplification attack"
                    }, {
                        name: "Accumulation Attack"
                    }]
                }, {
                    name: "Bribery Attack"
                }, {
                    name: "Sybil Attack"
                }, {
                    name: "PoW Based",
                    children: [{
                        name: "51% Attack"
                    }]
                }]
            }, {
                name: "Selfish mining",
                children: [{
                    name: "Block Withholding"
                }, {
                    name: "Empty Blocks"
                }]
            }, {
                name: "Double Spent Attack",
                children: [{
                    name: "Finney attacks"
                }]
            }, {
                name: "Long range attack / Precomputing Attack"
            }, {
                name: "PoS Based",
                children: [{
                    name: "Nothing at Stake"
                }, {
                    name: "Sour-Milk Attack"
                }]
            }, {
                name: "BFT Based"
            }]
        }, {
            name: "General",
            children: [{
                name: "Role Based Access Control Privilege Escalation"
            }, {
                name: "Broken Object Level Authorization"
            }, {
                name: "Hypervisor",
                children: [{
                    name: "Tampering Attack"
                }, {
                    name: "Virtual Disk Exploit"
                }]
            }]
        }]
    }
    ]
  };

  // Set the dimensions and margins of the diagram
  var margin = { top: 20, right: 90, bottom: 30, left: 90 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  var svg = d3.select("body").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate("
      + margin.left + "," + margin.top + ")");

  var i = 0,
    duration = 750,
    root;

  // declares a tree layout and assigns the size
  var treemap = d3.tree().size([height, width]);

  // Assigns parent, children, height, depth
  root = d3.hierarchy(treeData, function (d) { return d.children; });
  root.x0 = height / 2;
  root.y0 = 0;

  // Collapse after the second level
  root.children.forEach(collapse);

  update(root);

  // Collapse the node and all it's children
  function collapse(d) {
    if (d.children) {
      d._children = d.children
      d._children.forEach(collapse)
      d.children = null
    }
  }

  function update(source) {

    // Assigns the x and y position for the nodes
    var treeData = treemap(root);

    // Compute the new tree layout.
    var nodes = treeData.descendants(),
      links = treeData.descendants().slice(1);

    // Normalize for fixed-depth.
    nodes.forEach(function (d) { d.y = d.depth * 180 });

    // ****************** Nodes section ***************************

    // Update the nodes...
    var node = svg.selectAll('g.node')
      .data(nodes, function (d) { return d.id || (d.id = ++i); });

    // Enter any new modes at the parent's previous position.
    var nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr("transform", function (d) {
        return "translate(" + source.y0 + "," + source.x0 + ")";
      })
      .on('click', click);

    // Add Circle for the nodes
    nodeEnter.append('circle')
      .attr('class', 'node')
      .attr('r', 1e-6)
      .style("fill", function (d) {
        return d._children ? "lightsteelblue" : "#fff";
      });

    // Add labels for the nodes
    nodeEnter.append('text')
      .attr("dy", ".35em")
      .attr("x", function (d) {
        return d.children || d._children ? -13 : 13;
      })
      .attr("text-anchor", function (d) {
        return d.children || d._children ? "end" : "start";
      })
      .text(function (d) { return d.data.name; });

    // UPDATE
    var nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate.transition()
      .duration(duration)
      .attr("transform", function (d) {
        return "translate(" + d.y + "," + d.x + ")";
      });

    // Update the node attributes and style
    nodeUpdate.select('circle.node')
      .attr('r', 10)
      .style("fill", function (d) {
        return d._children ? "lightsteelblue" : "#fff";
      })
      .attr('cursor', 'pointer');


    // Remove any exiting nodes
    var nodeExit = node.exit().transition()
      .duration(duration)
      .attr("transform", function (d) {
        return "translate(" + source.y + "," + source.x + ")";
      })
      .remove();

    // On exit reduce the node circles size to 0
    nodeExit.select('circle')
      .attr('r', 1e-6);

    // On exit reduce the opacity of text labels
    nodeExit.select('text')
      .style('fill-opacity', 1e-6);

    // ****************** links section ***************************

    // Update the links...
    var link = svg.selectAll('path.link')
      .data(links, function (d) { return d.id; });

    // Enter any new links at the parent's previous position.
    var linkEnter = link.enter().insert('path', "g")
      .attr("class", "link")
      .attr('d', function (d) {
        var o = { x: source.x0, y: source.y0 }
        return diagonal(o, o)
      });

    // UPDATE
    var linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate.transition()
      .duration(duration)
      .attr('d', function (d) { return diagonal(d, d.parent) });

    // Remove any exiting links
    var linkExit = link.exit().transition()
      .duration(duration)
      .attr('d', function (d) {
        var o = { x: source.x, y: source.y }
        return diagonal(o, o)
      })
      .remove();

    // Store the old positions for transition.
    nodes.forEach(function (d) {
      d.x0 = d.x;
      d.y0 = d.y;
    });

    // Creates a curved (diagonal) path from parent to the child nodes
    function diagonal(s, d) {

      path = `M ${s.y} ${s.x}
          C ${(s.y + d.y) / 2} ${s.x},
            ${(s.y + d.y) / 2} ${d.x},
            ${d.y} ${d.x}`

      return path
    }

    // Toggle children on click.
    function click(d) {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      } else {
        d.children = d._children;
        d._children = null;
      }
      update(d);
    }
  }

})(jQuery); // end of jQuery name space