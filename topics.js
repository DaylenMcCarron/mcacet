/*
{
    Name: "",
    Subtopic: [
        {
            Name: "",
            Content: ""
        },
        
    ]
},
*/


let Subjects = {
    Subject: [
        {
            Name: 'Maths',
            Topic: [
                {
                    Name: "Algebra",
                    Subtopic: [
                        {
                            Path: "/course/Math/FOA.html", 
                            Name: "Fundamentals operations in Algebra",
                            Content: "<p>Expansion: When numbers in a bracket are multiplied by the number outside the bracket.<br>We use methods like:<br> 1. Expansion with one number<br>2. Expansion with another bracket<br>3. Crab claw method</p><a>Click here to learn more</a>"
                        },
                        {
                            Path: "/course/Math/expansion.html",
                            Name: "Algebraic Expansion",
                            Content: "Yes"
                        },
                        {
                            Name: "Factorization",
                            Content: "NO"
                        },
                        {
                            Path: "/course/Math/expansion.html",
                            Name: "Quadratic equations",
                            Content: "Yes"
                        },
                        {
                            Path: "/course/Math/expansion.html",
                            Name: "Indices",
                            Content: "Yes"
                        },
                        {
                            Path: "/course/Math/expansion.html",
                            Name: "Logarithms",
                            Content: "Yes"
                        },
                        {
                            Path: "/course/Math/expansion.html",
                            Name: "Arithmetic Progression",
                            Content: "Yes"
                        },
                        {
                            Path: "/course/Math/expansion.html",
                            Name: "Geometric Progression",
                            Content: "Yes"
                        },
                        {
                            Path: "/course/Math/expansion.html",
                            Name: "Harmonic Progression",
                            Content: "Yes"
                        },
                        {
                            Path: "/course/Math/expansion.html",
                            Name: "Binomial Theorem",
                            Content: "Yes"
                        },
                        {
                            Path: "/course/Math/expansion.html",
                            Name: "Permutations",
                            Content: "Yes"
                        },
                        {
                            Path: "/course/Math/expansion.html",
                            Name: "Combinations",
                            Content: "Yes"
                        }
                    ]  
                },
                {
                    Name: "Coordinate Geometry",
                    Subtopic: [
                        {
                            Path: "/course/Math/cartco.html",
                            Name: "Rectangular Cartesian co-ordinates",
                            Content: "NONONO"
                        }
                    ]
                },
            ]
        },
        {
            Name: "logic",
            Topic: [
                {
                    Name: "Algebra",
                    Subtopic: [
                        {
                            Name: "Fundamentals operations in Algebra",
                            Content: "lel"
                        },
                        {
                            Name: "Algebraic Expansion",
                            Content: "Yes"
                        }
                    ]  
                },
            ]
        }   
    ]
}
        //     'Fundamentals operations in Algebra',
        //     'Expansion',
        //     'Factorization',
        //     'Quadratic equations',
        //     'Indices',
        //     'Logarithms',
        //     'Arithmetic Progression',
        //     'Geometric Progression',
        //     'Harmonic Progression',
        //     'Binomial Theorem',
        //     'Permutations and Combinations'
        // ]

        
function create() {
    console.log("create function")
    for(let k = 0; k < Subjects.Subject.length; k++) {
        //Create Subject Div
        const subject = document.createElement("section");
        subject.className = "subject"
        var element = document.getElementById('syllabus');
        element.appendChild(subject);

        // Create Subject Header
        const subjectHeader = document.createElement("h1");
        subjectHeader.innerHTML = Subjects.Subject[k].Name;
        subject.appendChild(subjectHeader);


        for (let i = 0; i < Subjects.Subject[k].Topic.length; i++) {
            // Create Topic Div
            const topic = document.createElement("div");
            topic.className = "topic"
            subject.appendChild(topic);
                
        // Create Topic Header
        const topicHeader = document.createElement("h1");
        topicHeader.innerHTML = Subjects.Subject[k].Topic[i].Name;
        topicHeader.addEventListener("click", ()=>{dropdown('th'+k+i)});
        topic.appendChild(topicHeader);
        
        for(let j = 0; j < Subjects.Subject[k].Topic[i].Subtopic.length; j++)
        {
            // Create Subtopic Div
            const subtopic = document.createElement("div");
            subtopic.className = "sub-topic";
            subtopic.setAttribute('name',"th"+k+i)
            topic.appendChild(subtopic);
            
            // Create Subtopic Header
            const subtopicHeader = document.createElement("h2");
            subtopicHeader.innerHTML = Subjects.Subject[k].Topic[i].Subtopic[j].Name;
            subtopicHeader.addEventListener("click", ()=>{dropdown('th'+k+i+j)});
            subtopic.appendChild(subtopicHeader);
            
            // Create Subtopic Content
            const content = document.createElement("div");
            content.className = "sub-topic-content";
            content.innerHTML = Subjects.Subject[k].Topic[i].Subtopic[j].Content;
            content.addEventListener("click", ()=>{openLink(Subjects.Subject[k].Topic[i].Subtopic[j].Path)});
            content.style.display = "none";
            content.setAttribute('name',"th"+k+i+j)
            subtopic.appendChild(content);
        }
    }

    }



}

function leftSyllabus(selId) {
    for(let k = 0; k < Subjects.Subject.length; k++) {
        //Create Subject Div
        const subject = document.createElement("section");
        subject.className = "left-subject"
        var element = document.getElementById('syllabus');
        element.appendChild(subject);

        // Create Subject Header
        const subjectHeader = document.createElement("h1");
        subjectHeader.innerHTML = Subjects.Subject[k].Name;
        subject.appendChild(subjectHeader);


        for (let i = 0; i < Subjects.Subject[k].Topic.length; i++) {
            // Create Topic Div
            const topic = document.createElement("div");
            topic.className = "left-topic"
            subject.appendChild(topic);
                
        // Create Topic Header
        const topicHeader = document.createElement("h1");
        topicHeader.innerHTML = Subjects.Subject[k].Topic[i].Name;
        topicHeader.addEventListener("click", ()=>{dropdown('th'+k+i)});
        topic.appendChild(topicHeader);
        
        for(let j = 0; j < Subjects.Subject[k].Topic[i].Subtopic.length; j++){
            // Create Subtopic Div
            const subtopic = document.createElement("div");
            subtopic.className = "left-sub-topic";
            subtopic.setAttribute('id',"th"+k+i+j)
                topic.appendChild(subtopic);
                
                // Create Subtopic Header
                const subtopicHeader = document.createElement("a");
                subtopicHeader.innerHTML = Subjects.Subject[k].Topic[i].Subtopic[j].Name;
                let path = Subjects.Subject[k].Topic[i].Subtopic[j].Path
                if (!path)
                path = "#"
                subtopic.addEventListener("click", ()=>{openLink(path)});
                subtopic.appendChild(subtopicHeader);
            }
        }
    }
    selectedTopic(selId)
}

function dropdown(n) {
    let click = document.getElementsByName(n);
    for(let a = 0; a < click.length; a++)
    {
    if(click[a].style.display === "none")
        {click[a].style.display = "block";}
    else
        {click[a].style.display = "none";}
    }
}

function openLink(path) {
    console.log(path)
    window.open(path,"_self")
}

function selectedTopic (val) {
    console.log("th"+val);
    document.getElementById("th"+val).setAttribute("class", document.getElementById("th"+val).classList+" selectedSubtopic");

}

function mobSyl() {
    let str = document.getElementById("syllabus").className;
    let isStr = str.search("hidden");
    let classStr = document.getElementById("syllabus").className;

    if(isStr === -1)
    {
        document.getElementById("syllabus").setAttribute('class', classStr + " hidden");
        console.log("if")
    }
    else
    {
        console.log("else")
        classStr = classStr.slice(0, isStr);
        document.getElementById("syllabus").setAttribute('class', classStr);
        console.log(classStr);
    }
    
}