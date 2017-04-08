'use strict';

const Bpmn = require('bpmn-engine');
const EventEmitter = require('events').EventEmitter;

const processXml = `
<?xml version="1.0" encoding="UTF-8"?>
    <definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <process id="theProcess" isExecutable="true">
        <dataObjectReference id="inputFromUserRef" dataObjectRef="inputFromUser" />
        <dataObject id="inputFromUser" />
        <startEvent id="theStart" />
        <userTask id="userTask">
          <ioSpecification id="inputSpec">
            <dataOutput id="userInput" />
          </ioSpecification>
          <dataOutputAssociation id="associatedWith" sourceRef="userInput" targetRef="inputFromUserRef" />
        </userTask>
        <endEvent id="theEnd" />
        <sequenceFlow id="flow1" sourceRef="theStart" targetRef="userTask" />
        <sequenceFlow id="flow2" sourceRef="userTask" targetRef="theEnd" />
      </process>
    </definitions>`;

const engine = new Bpmn.Engine({
      name: 'listen example',
      source: processXml
});
const listener = new EventEmitter();

listener.once('wait-userTask', (task) => {
  task.signal({
      sirname: 'von Rosen'
    });
});

listener.on('taken', (flow) => {
  console.log(`flow <${flow.id}> was taken`);
});

engine.once('end', (definition) => {
  console.log(`User sirname is ${definition.variables.inputFromUser.sirname}`);
});

engine.execute({
  listener: listener
}, (err, instance) => {
  if (err) throw err;
});
