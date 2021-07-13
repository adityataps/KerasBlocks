import Blockly from "blockly";
import 'blockly/python'

Blockly.Blocks['imports'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Importing packages");
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("Importing necessary libraries.");
 this.setHelpUrl("importing");
  }
};

Blockly.Python['imports'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'import numpy as np ' +
      '\nimport tensorflow as tf ' +
      '\nfrom tensorflow import keras ' +
      '\nfrom tensorflow.keras import layers, activations ' +
      '\n\n';
  return code;
};

Blockly.Blocks['sequential'] = {
  init: function() {
    this.appendStatementInput("layers")
        .setCheck(null)
        .appendField("Sequential");
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("Processes data sequentially through layers.");
 this.setHelpUrl("");
  }
};

Blockly.Python['sequential'] = function(block) {
  var statements_layers = Blockly.Python.statementToCode(block, 'layers');
  // TODO: Assemble Python into code variable.
  // statements_layers = "~" + statements_layers
  // statements_layers = statements_layers.split("~")
  var code = "keras.Sequential([\n";
  // for (let i = 0; i < 3; i++) {
    code += "" + statements_layers;
  // }
  code += "])\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['layer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Layer")
        .appendField(new Blockly.FieldTextInput("layer_name"), "layer_name")
        .appendField("Number of nodes")
        .appendField(new Blockly.FieldNumber(1, 1), "num_nodes")
        .appendField("Activation")
        .appendField(new Blockly.FieldDropdown([
            ["relu","activations.relu"],
          ["sigmoid","activations.sigmoid"],
          ["softmax","activations.softmax"],
          ["softplus","activations.softplus"],
          ["softsign","activations.softsign"],
          ["tanh","activations.tanh"],
          ["selu","activations.selu"],
          ["elu","activations.elu"],
          ["exponential","activations.exponential"]]), "activation");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(240);
 this.setTooltip("Layer for setting up the neural network");
 this.setHelpUrl("");
  }
};

Blockly.Python['layer'] = function(block) {
  var text_layer_name = block.getFieldValue('layer_name');
  var number_num_nodes = block.getFieldValue('num_nodes');
  var dropdown_activation = block.getFieldValue('activation');
  // TODO: Assemble Python into code variable.
  var code = `layers.Dense(${number_num_nodes}, activation=${dropdown_activation}, name="${text_layer_name}"),\n`;
  return code;
};

Blockly.Blocks['add_layer'] = {
  init: function() {
    this.appendValueInput("add_layer_to")
        .setCheck("sequential")
        .appendField("Add layers to");
    this.appendStatementInput("layers")
        .setCheck("layer");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['add_layer'] = function(block) {
  var value_add_layer_to = Blockly.Python.valueToCode(block, 'add_layer_to', Blockly.Python.ORDER_ATOMIC);
  var statements_layers = Blockly.Python.statementToCode(block, 'layers');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Blocks['input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Input");
    this.appendStatementInput("Dimensions")
        .setCheck("Number")
        .appendField("Dimensions");
    this.setOutput(true, null);
    this.setColour(255);
 this.setTooltip("dimensions (np)");
 this.setHelpUrl("");
  }
};

Blockly.Python['input'] = function(block) {
  var statements_dimensions = Blockly.Python.statementToCode(block, 'Dimensions');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['process_layer'] = {
  init: function() {
    this.appendStatementInput("Layer")
        .setCheck("layer")
        .appendField("Process layers");
    this.appendValueInput("Input")
        .setCheck(null)
        .appendField("to");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("Process layers onto input node");
 this.setHelpUrl("");
  }
};

Blockly.Python['process_layer'] = function(block) {
  var statements_layer = Blockly.Python.statementToCode(block, 'Layer');
  var value_input = Blockly.Python.valueToCode(block, 'Input', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['process_model'] = {
  init: function() {
    this.appendValueInput("model")
        .setCheck(null)
        .appendField("Process model");
    this.appendValueInput("input")
        .setCheck(null)
        .appendField("to");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Python['process_model'] = function(block) {
  var value_model = Blockly.Python.valueToCode(block, 'model', Blockly.Python.ORDER_ATOMIC);
  var value_input = Blockly.Python.valueToCode(block, 'input', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = `${value_model}(tf.convert_to_tensor(${value_input}))\n`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};