<?php

class Get_Item extends Item {

	public $type = 'get';
	public $input_attributes = array('type' => 'hidden');
	public $no_user_input_required = true;
	public $probably_render = true;
	public $mysql_field = 'TEXT DEFAULT NULL';
	protected $hasChoices = false;
	private $get_var = 'referred_by';

	protected function setMoreOptions() {
		if (isset($this->type_options_array) && is_array($this->type_options_array)) {
			if (count($this->type_options_array) == 1) {
				$this->get_var = trim(current($this->type_options_array));
			}
		}

		$this->input_attributes['value'] = '';
		$request = new Request($_GET);
		if (($value = $request->getParam($this->get_var)) !== null) {
			$this->input_attributes['value'] = $value;
		}
	}

	public function validate() {
		if (!preg_match('/^[A-Za-z0-9_]+$/', $this->get_var)) {
			$this->val_errors[] = __('Problem with variable %s "get %s". The part after get can only contain a-Z0-9 and the underscore.', $this->name, $this->get_var);
		}
		return parent::validate();
	}

	public function render() {
		return $this->render_input();
	}

	public function needsDynamicValue() {
		return false;
	}

}
