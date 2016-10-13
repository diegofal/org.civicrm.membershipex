<?php

require_once 'membershipex.civicrm.php';

/**
 * Implementation of hook_civicrm_config
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_config
 * @param $config
 */
function membershipex_civicrm_config(&$config) {
	_membershipex_civicrm_civicrm_config($config);
}

/**
 * Implementation of hook_civicrm_xmlMenu
 *
 * @param $files array(string)
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_xmlMenu
 */
function membershipex_civicrm_xmlMenu(&$files) {
	_membershipex_civicrm_civicrm_xmlMenu($files);
}

/**
 * Implementation of hook_civicrm_install
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_install
 */
function membershipex_civicrm_install() {
	return _membershipex_civicrm_civicrm_install();
}

/**
 * Implementation of hook_civicrm_uninstall
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_uninstall
 */
function membershipex_civicrm_uninstall() {
	return _membershipex_civicrm_civicrm_uninstall();
}

/**
 * Implementation of hook_civicrm_enable
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_enable
 */
function membershipex_civicrm_enable() {
	return _membershipex_civicrm_civicrm_enable();
}

/**
 * Implementation of hook_civicrm_disable
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_disable
 */
function membershipex_civicrm_disable() {
	return _membershipex_civicrm_civicrm_disable();
}

/**
 * Implementation of hook_civicrm_upgrade
 *
 * @param $op string, the type of operation being performed; 'check' or 'enqueue'
 * @param $queue CRM_Queue_Queue, (for 'enqueue') the modifiable list of pending up upgrade tasks
 *
 * @return mixed  based on op. for 'check', returns array(boolean) (TRUE if upgrades are pending)
 *                for 'enqueue', returns void
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_upgrade
 */
function membershipex_civicrm_upgrade($op, CRM_Queue_Queue $queue = NULL) {
	return _membershipex_civicrm_civicrm_upgrade($op, $queue);
}

/**
 * Implementation of hook_civicrm_managed
 *
 * Generate a list of entities to create/deactivate/delete when this module
 * is installed, disabled, uninstalled.
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_managed
 * @param $entities
 */
function membershipex_civicrm_managed(&$entities) {
	return _membershipex_civicrm_civicrm_managed($entities);
}

/**
 * Implementation of hook_civicrm_caseTypes
 *
 * Generate a list of case-types
 *
 * Note: This hook only runs in CiviCRM 4.4+.
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_caseTypes
 * @param $caseTypes
 */
function membershipex_civicrm_caseTypes(&$caseTypes) {
	_membershipex_civicrm_civicrm_caseTypes($caseTypes);
}

/**
 * Implementation of hook_civicrm_alterSettingsFolders
 *
 * @link http://wiki.civicrm.org/confluence/display/CRMDOC/hook_civicrm_alterSettingsFolders
 * @param null $metaDataFolders
 */
function membershipex_civicrm_alterSettingsFolders(&$metaDataFolders = NULL) {
	_membershipex_civicrm_civicrm_alterSettingsFolders($metaDataFolders);
}

/**
 * @param $angularModule
 */
function membershipex_civicrm_angularModules(&$angularModule) {
	$angularModule['membershipExtension'] = array(
		'ext' => 'org.civicrm.membershipex',
		//'js'       => array('js/*.js'),
		'js' => array(
			'js/membershipExtension.js',
			'js/membershipExtensionServices.js',
			'js/membershipExtensionCtrl.js',
			'js/membershipExtensionRoutes.js',

		),
		'partials' => array('partials'),
	);
}

function membershipex_civicrm_navigationMenu(&$params) {
	_membershipex_civicrm_navigationMenu($params);
}
